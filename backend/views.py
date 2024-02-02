from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer, CreateUserSerializer
from hashlib import sha256


# Create your views here.

class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        
        if serializer.is_valid():
            user = User(
                name = serializer.data.get('name'),
                email = serializer.data.get('email'),
                password = serializer.data.get('password')
            )
            user.save()
            return Response(UserSerializer(user).data, status=status.HTTP_201_CREATED)
        else:
            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)
