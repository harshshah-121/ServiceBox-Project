from rest_framework import serializers
from .models import ServiceProvider
from django.core.validators import RegexValidator
from django.contrib.auth.hashers import make_password


class ServiceProviderSerializer(serializers.ModelSerializer):
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

class ServiceProvider_Main_Registraion_Serializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    aadhar_no = serializers.CharField(
        min_length=12, max_length=12,
        validators=[RegexValidator(r'^\d{12}$', "Aadhar number must be exactly 12 digits.")]
    )
    password = serializers.CharField(write_only=True, min_length=6)

    class Meta:
        model = ServiceProvider
        fields = ['name', 'email', 'address', 'password', 'aadhar_no', 'gender', 'status']

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])  
        return ServiceProvider.objects.create(**validated_data)