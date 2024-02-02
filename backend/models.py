from django.db import models

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=128, default='')
    email = models.CharField(max_length=128, default='')
    password = models.CharField(max_length=128, default='')