from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView,TokenRefreshView,)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('admin/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
]