from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager
from django.core.validators import FileExtensionValidator

class ServiceProviderManager(BaseUserManager):
    def create_user(self, email, firstname, lastname, password=None):
        if not email:
            raise ValueError("Email is required")
        user = self.model(email=self.normalize_email(email), firstname=firstname, lastname=lastname)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, firstname, lastname, password=None):
        user = self.create_user(email, firstname, lastname, password)
        user.is_admin = True
        user.save(using=self._db)
        return user

# Service Provider Model
class ServiceProvider(AbstractBaseUser):
    firstname = models.CharField(max_length=50)
    lastname = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    password=models.CharField(max_length=100)
    address=models.TextField(null=True, blank=True)
    aadhar_card=models.ImageField(upload_to="Ser_provider/identification_docs/", null=True, blank=True,validators=[FileExtensionValidator(['jpg', 'jpeg', 'png', 'svg'])])
    electricity_bill=models.ImageField(upload_to="Ser_provider/identification_docs/", null=True, blank=True,validators=[FileExtensionValidator(['jpg', 'jpeg', 'png', 'svg'])])
    police_certificate=models.ImageField(upload_to="Ser_provider/identification_docs/", null=True, blank=True,validators=[FileExtensionValidator(['jpg', 'jpeg', 'png', 'svg'])])
    phone_number=models.CharField(max_length=15, null=True, blank=True)
    date_of_birth=models.DateField(null=True, blank=True)
    age=models.IntegerField(null=True, blank=True)
    gender=models.CharField(max_length=10,choices=(('Male','Male'),('Female','Female'),('Other','Other')))
    registration_date=models.DateField(auto_now_add=True)
    profile_pic=models.ImageField(upload_to='Ser_provider/profile_pics/', null=True, blank=True)
    status = models.CharField(max_length=50, choices=[("Active", "Active"), ("In Active", "In Active")], default="Active")
    # is_admin = models.BooleanField(default=False)
    
    class meta:
        db_table='serviceProvider'
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['firstname', 'lastname']

    objects = ServiceProviderManager()

    def __str__(self):
        return self.email
