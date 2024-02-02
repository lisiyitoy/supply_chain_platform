from django.shortcuts import render
from rest_framework import generics, status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import User
from .serializers import UserSerializer, UserRegisterSerializer, UserLoginSerializer
from hashlib import sha256


# Create your views here.

class UserView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserRegisterView(APIView):
    serializer_class = UserRegisterSerializer

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


class UserLoginView(APIView):
    serializer_class = UserLoginSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)

        if serializer.is_valid():
            email = serializer.data.get('email')
            password = serializer.data.get('password')

            queryset = User.objects.filter(email=email, password=password)
            if queryset.queryset.exists():
                user = queryset[0]
                user.is_login = True
                user.save(update_fields=['is_login'])
                return Response("", status=status.HTTP_200_OK)
            else:
                return Response({'error': 'user not found'}, status=status.HTTP_400_BAD_REQUEST)
        else:
            return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)