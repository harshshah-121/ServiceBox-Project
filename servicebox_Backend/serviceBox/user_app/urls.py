from django.urls import path
from .views import UserRegistrationView,ContactUsView,UploadProfilePicView,DeleteAccountView,ChangePasswordView,UserLogoutView,UserProfileView,CSRFTokenView,ResetPasswordView,GetAllUsersView,UserLoginView,SendOTPView,VerifyOTPView

urlpatterns = [
    path('register/', UserRegistrationView.as_view(), name='user-registration'),
    path('user-login/', UserLoginView.as_view(), name='user-login'),
    path('send-otp/', SendOTPView.as_view(), name='send-otp'),
    path('verify-otp/', VerifyOTPView.as_view(), name='verify-otp'),
    path('userdata/',GetAllUsersView.as_view(), name='get_all_users'),
    path('reset-password/', ResetPasswordView.as_view(), name='reset_password'),
    path('csrf/', CSRFTokenView.as_view(), name='csrf_token'),
    path('user-profile/', UserProfileView.as_view(), name="edit-profile"),
    path('user-logout/', UserLogoutView.as_view(), name='logout'),
    path('change-password/', ChangePasswordView.as_view(), name="chnage-password"),
    path('delete-account/', DeleteAccountView.as_view(), name='delete-account'),
    path('contact-us/', ContactUsView.as_view(), name='contact_us'),
    path('upload-profile-pic/', UploadProfilePicView.as_view(), name='upload_profile_pic'),
]