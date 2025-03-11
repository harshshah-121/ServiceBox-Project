from django.urls import path
from .views import ServiceProviderRegisterView,ServiceProvider_Main_Registration,ServiceProvider_LoginView

urlpatterns = [
    path('register/', ServiceProviderRegisterView.as_view(), name='service-provider-register'),
    path('main_register/', ServiceProvider_Main_Registration.as_view(), name='service-provider-main-register'),
    path('login/', ServiceProvider_LoginView.as_view(), name='service-provider-login'),
]
