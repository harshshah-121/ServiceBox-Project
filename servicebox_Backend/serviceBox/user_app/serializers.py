import random
import string
from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User


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