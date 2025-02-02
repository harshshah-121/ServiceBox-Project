from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserRegistrationSerializer,UserProfileSerializer,ResetPasswordSerializer,UserLoginSerializer,SendOTPSerializer,VerifyOTPSerializer,UserSerializer
from django.core.mail import send_mail
from django.conf import settings
from .models import User
from django.contrib.auth.hashers import make_password
from django.middleware.csrf import get_token

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
            user_data = serializer.validated_data
            user = User.objects.get(user_email=user_data['user_email'])

            request.session['user_id'] = user.user_id
            request.session['user_name'] = user.user_name
            request.session['user_email'] = user.user_email
            # request.session.save()
            # csrf_token = get_token(request)
            return Response({
                "message": "Login successful",
                "data": user_data,
            }, status=status.HTTP_200_OK)
        return Response({
            "errors": serializer.errors
        }, status=status.HTTP_400_BAD_REQUEST)
    

class SendOTPView(APIView):
    def post(self, request):
        serializer = SendOTPSerializer(data=request.data)
        if serializer.is_valid():
            user = User.objects.get(user_email=serializer.validated_data['user_email'])
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
            user = User.objects.get(user_email=serializer.validated_data['user_email'])

            if user.otp != serializer.validated_data['otp']:
                return Response({"error": "Invalid OTP."}, status=status.HTTP_400_BAD_REQUEST)

            if 'reset_password' in request.data and request.data['reset_password'] is True:
                return Response({"message": "Password"}, status=status.HTTP_200_OK)
            
            else:
                user.email_verified = True
                user.otp = None  
                user.save()
                return Response({"message": "Email"}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class ResetPasswordView(APIView):
    def post(self, request):
        serializer = ResetPasswordSerializer(data=request.data)
        if serializer.is_valid():
            user_email = serializer.validated_data['user_email']
            new_password = serializer.validated_data['new_password']
            
            try:
                user = User.objects.get(user_email=user_email)
                user.user_password = make_password(new_password)  
                user.otp = None  
                user.save()
                return Response({"message": "Password reset successful."}, status=status.HTTP_200_OK)
            except User.DoesNotExist:
                return Response({"error": "User not found."}, status=status.HTTP_404_NOT_FOUND)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    
class GetAllUsersView(APIView):
    def get(self, request):
        users = User.objects.all()  
        serializer = UserSerializer(users, many=True)  
        return Response(serializer.data, status=status.HTTP_200_OK)
    
class CSRFTokenView(APIView):
    def get(self, request):
        return Response({"csrf_token": get_token(request)})
    
class UserProfileView(APIView):
    def get(self, request):
        user_id = request.session.get("user_id")
        if not user_id:
            return Response({"error": "User not logged in"}, status=status.HTTP_401_UNAUTHORIZED)

        user = User.objects.get(user_id=user_id)
        serializer = UserProfileSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request):
        user_id = request.session.get("user_id")
        if not user_id:
            return Response({"error": "User not logged in"}, status=status.HTTP_401_UNAUTHORIZED)

        user = User.objects.get(user_id=user_id)
        serializer = UserProfileSerializer(user, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response({
                "message": "Profile updated successfully",
                "data": serializer.data
            }, status=status.HTTP_200_OK)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)