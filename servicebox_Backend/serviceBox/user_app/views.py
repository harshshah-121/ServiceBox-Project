from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegistrationSerializer,UserLoginSerializer,SendOTPSerializer, VerifyOTPSerializer
from django.core.mail import send_mail
from django.conf import settings
from .models import User as usertable

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
    
    
class UserLoginView(APIView):
    def post(self, request):
        # print("Request data:", request.data)
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid():
            return Response({
                "message": "Login successful",
                "data": serializer.validated_data
            }, status=status.HTTP_200_OK)
        return Response({
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
    

class SendOTPView(APIView):
    def post(self, request):
        serializer = SendOTPSerializer(data=request.data)
        if serializer.is_valid():
            user = usertable.objects.get(user_email=serializer.validated_data['user_email'])
            user.generate_otp()

            
            send_mail(
                'Your OTP for Email Verification',
                f'Your OTP is {user.otp}',
                settings.EMAIL_HOST_USER,
                [user.user_email],
                fail_silently=False,
            )

            return Response({"message": "OTP sent to email."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VerifyOTPView(APIView):
    def post(self, request):
        serializer = VerifyOTPSerializer(data=request.data)
        if serializer.is_valid():
            user = usertable.objects.get(user_email=serializer.validated_data['user_email'])
            user.email_verified = True
            user.otp = None  
            user.save()

            return Response({"message": "Email verified successfully."}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)