from django.contrib.auth.models import AbstractUser
from django.db import models


# Create your models here.
class User(AbstractUser):

    phone = models.CharField(max_length=255)
    birth_date = models.DateField(null=True, blank=True)
    
    def __str__(self):
        return self.email

    class Meta:
        ordering = ['first_name', 'last_name']
