from django.contrib.auth import authenticate
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import AllowAny
from django.contrib.auth.models import User

class AdminLoginView(APIView):  
    permission_classes = [AllowAny]  

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        user = authenticate(request, username=username, password=password)

        if user is not None:
            if user.is_superuser:
                return Response({
                    "message": "Login successful",
                    "username": user.username
                }, status=status.HTTP_200_OK)
            else:
                return Response({
                    "error": "User is not an admin"
                }, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response({
                "error": "Invalid credentials"
            }, status=status.HTTP_401_UNAUTHORIZED)
