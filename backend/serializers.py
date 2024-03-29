from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class UserRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =  ['name', 'email', 'password']


class UserLoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields =  ['email', 'password']
