from django.contrib import admin
from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.home, name="home"),
    path('register/', views.signup, name="signup"),
    path('login/', views.signin, name="signin"),
]