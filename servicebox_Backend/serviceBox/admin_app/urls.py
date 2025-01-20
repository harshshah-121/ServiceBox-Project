from django.contrib import admin
from django.urls import path
from admin_app import views
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,)

urlpatterns = [
    path('login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('/aa',aa.views),
]