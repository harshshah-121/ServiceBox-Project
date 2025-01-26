from django.db import models
import random

class User(models.Model):
    user_id = models.CharField(max_length=10, primary_key=True)
    user_name = models.CharField(max_length=20)
    user_password = models.CharField(max_length=130)
    user_email = models.EmailField(max_length=50,unique=True)
    user_phone_number = models.CharField(max_length=15, null=True, blank=True)
    user_address = models.TextField(null=True, blank=True)
    user_date_of_birth = models.DateField(null=True, blank=True)
    user_registration_date = models.DateField(auto_now_add=True)
    user_age = models.IntegerField(null=True, blank=True)
    user_gender = models.CharField(max_length=6, null=True, blank=True)
    profile_pic = models.ImageField(upload_to='profile_pics/', null=True, blank=True)
    email_verified = models.BooleanField(default=False)
    otp = models.IntegerField(null=True, blank=True)

    def generate_otp(self):
        self.otp = random.randint(100000, 999999)
        self.save()

    class Meta:
        db_table = 'user'

