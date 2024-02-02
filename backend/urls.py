from django.urls import path
from .views import UserView, UserRegisterView, UserLoginView

urlpatterns = [
    path('user', UserView.as_view()),
    path('user-register', UserRegisterView.as_view()),
    path('user-login', UserLoginView.as_view())
]