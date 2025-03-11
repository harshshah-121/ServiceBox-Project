from rest_framework import serializers
from .models import ServiceProvider
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login
from rest_framework.serializers import ValidationError

class ServiceProvider_Basic_Registration_Serializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = ServiceProvider
        fields = ['firstname', 'lastname', 'email', 'password', 'confirm_password']
        extra_kwargs = {'password': {'write_only': True}}

    def validate(self, data):
        if data['password'] != data['confirm_password']:
            raise serializers.ValidationError({"password": "Passwords do not match"})
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')  # Remove confirm_password before saving
        user = ServiceProvider.objects.create_user(
            email=validated_data['email'],
            firstname=validated_data['firstname'],
            lastname=validated_data['lastname'],
            password=validated_data['password']
        )
        return user

class ServiceProvider_Main_Registration_Serializer(serializers.ModelSerializer):
    aadharCard = serializers.ImageField(required=False)
    electricityBill = serializers.ImageField(required=False)
    Policeclearancecertificate = serializers.ImageField(required=False)

    class Meta:
        model = ServiceProvider
        fields = ['address', 'gender', 'status', 'aadharCard', 'electricityBill', 'Policeclearancecertificate']

    def validate(self, data):
        print(data)
        return data
    def validate_gender(self, value):
        if value not in ["Male", "Female", "Other"]:
            raise serializers.ValidationError("Invalid gender. Choose from Male, Female, or Other.")
        return value

    def validate_status(self, value):
        if value not in ["Active", "In Active"]: 
            raise serializers.ValidationError("Invalid status. Choose from Active or In Active.")
        return value
    
    # def validate_aadharCard(self, value):
    #     if not value.content_type.startswith('image'):
    #         raise serializers.ValidationError("Only image files are allowed.")
    #     return value
    
    # def validate_electricityBill(self, value):
    #     if not value.content_type.startswith('image'):
    #         raise serializers.ValidationError("Only image files are allowed.")
    #     return value
    
    # def validate_policeClearanceCertificate(self, value):
    #     if not value.content_type.startswith('image'):
    #         raise serializers.ValidationError("Only image files are allowed.")
    #     return value
class ServiceProvider_Login_Serializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceProvider 
        fields = ['email', 'password']

    email = serializers.EmailField(required=True)
    password = serializers.CharField(write_only=True, required=True, min_length=6)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        # Authenticate user
        user = authenticate(username=email, password=password)

        if user is None:
            raise ValidationError("Invalid email or password")

        if not user.is_active:
            raise ValidationError("Your account is inactive. Contact admin.")

        data['user'] = user
        return data
