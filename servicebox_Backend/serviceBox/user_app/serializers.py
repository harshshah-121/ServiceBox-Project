import random
import string
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User
from django.contrib.auth.hashers import check_password



class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_name', 'user_email', 'user_password']
        extra_kwargs = {
            'user_password': {'write_only': True}  
        }

    def create(self, validated_data):
        
        validated_data['user_id'] = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        while User.objects.filter(user_id=validated_data['user_id']).exists():
            validated_data['user_id'] = ''.join(random.choices(string.ascii_uppercase + string.digits, k=8))
        
        validated_data['user_password'] = make_password(validated_data['user_password'])
        
        return super().create(validated_data)
    

class UserLoginSerializer(serializers.Serializer):
    user_email = serializers.EmailField()
    user_password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('user_email')
        password = data.get('user_password')

        try:
            user = User.objects.get(user_email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("Invalid email or password.")

        if not check_password(password, user.user_password):
            raise serializers.ValidationError("Invalid email or password.")

        if not user.email_verified:
            raise serializers.ValidationError("Email is not verified.")

        return {
            "user_id": user.user_id,
            "user_name": user.user_name,
            "user_email": user.user_email,
        }
    

class SendOTPSerializer(serializers.Serializer):
    user_email = serializers.EmailField()

    def validate_user_email(self, value):
        if not User.objects.filter(user_email=value).exists():
            raise serializers.ValidationError("Email not registered.")
        return value
    
class VerifyOTPSerializer(serializers.Serializer):
    user_email = serializers.EmailField()
    otp = serializers.IntegerField()
    reset_password = serializers.BooleanField(required=False, default=False)

    def validate(self, data):
        user = User.objects.filter(user_email=data['user_email']).first()
        if not user:
            raise serializers.ValidationError("Email not found.")
        if user.otp != data['otp']:
            raise serializers.ValidationError("Invalid OTP.")
        return data
    

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User  
        fields = [
            'user_id', 
            'user_name', 
            'user_email', 
            'user_phone_number', 
            'user_address', 
            'user_date_of_birth', 
            'user_registration_date', 
            'user_age', 
            'user_gender', 
            'profile_pic', 
            'email_verified', 
        ] 


class ResetPasswordSerializer(serializers.Serializer):
    user_email = serializers.EmailField()
    new_password = serializers.CharField(write_only=True)


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['user_name','user_email', 'user_phone_number', 'user_address', 'user_gender', 'user_age']

    def update(self, instance, validated_data):
        instance.user_name = validated_data.get('user_name', instance.user_name)
        instance.user_phone_number = validated_data.get('user_phone_number', instance.user_phone_number)  
        instance.user_address = validated_data.get('user_address', instance.user_address)  
        instance.user_gender = validated_data.get('user_gender', instance.user_gender)  
        instance.user_age = validated_data.get('user_age', instance.user_age)  
        instance.save()
        return instance
    
class ChangePasswordSerializer(serializers.Serializer):
    current_password = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True)
    confirm_password = serializers.CharField(write_only=True)

    def validate(self, data):
        request = self.context.get('request')  
        user_id = request.session.get('user_id')  

        if not user_id:
            raise serializers.ValidationError({"error": "User is not authenticated."})

        try:
            user = User.objects.get(user_id=user_id)
        except User.DoesNotExist:
            raise serializers.ValidationError({"error": "User not found."})

        if not check_password(data['current_password'], user.user_password):
            raise serializers.ValidationError({"error": "Current password is incorrect."})

        if data['new_password'] != data['confirm_password']:
            raise serializers.ValidationError({"error": "New password and confirm password do not match."})

        return data

    def save(self, **kwargs):
        request = self.context.get('request')
        user_id = request.session.get('user_id')

        user = User.objects.get(user_id=user_id)
        user.user_password = make_password(self.validated_data['new_password']) 
        user.save()

class DeleteAccountSerializer(serializers.Serializer):
    confirm = serializers.BooleanField()

    def validate_confirm(self, value):
        if value is not True:
            raise serializers.ValidationError("You must confirm account deletion.")
        return value
