from django.urls import path
from .views import ServiceProviderRegisterView

urlpatterns = [
    path('register/', ServiceProviderRegisterView.as_view(), name='service-provider-register'),
]
