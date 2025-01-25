from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegistrationSerializer

class UserRegistrationView(APIView):
    def post(self, request):
        # print("Request data:", request.data)
        serializer = UserRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()  
            return Response({
                "message": "User registered successfully",
                "data": serializer.data,
            }, status=status.HTTP_201_CREATED)
        # print("Request error:", serializer.errors)
        return Response({
            "error": "Registration failed from python",
            "details": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
