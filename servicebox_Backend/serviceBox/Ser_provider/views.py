from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import ServiceProvider_Basic_Registration_Serializer, ServiceProvider_Main_Registration_Serializer

class ServiceProviderRegisterView(APIView):
    def post(self, request):
        print(request.data);
        serializer = ServiceProvider_Basic_Registration_Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Service Provider registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ServiceProvider_Main_Registration(APIView):
    def post(self, request):
        serializer = ServiceProvider_Main_Registration_Serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "Service Provider registered successfully!"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)