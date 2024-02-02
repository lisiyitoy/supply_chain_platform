import uuid
from django.db import models

# Create your models here.
class User(models.Model):
    user_id = models.CharField(max_length=128, default=str(uuid.uuid4()), primary_key=True)
    name = models.CharField(max_length=128, default='')
    email = models.CharField(max_length=128, default='')
    password = models.CharField(max_length=128, default='')
    is_login = models.BooleanField(default=False)