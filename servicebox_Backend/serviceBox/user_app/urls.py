from django.urls import path
from .views import UserRegistrationView,GetAllUsersView,UserLoginView,SendOTPView,VerifyOTPView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('user-login/', UserLoginView.as_view(), name='user-login'),
    path('send-otp/', SendOTPView.as_view(), name='send-otp'),
    path('verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),
    path('userdata/',GetAllUsersView.as_view(), name='get_all_users'),
]