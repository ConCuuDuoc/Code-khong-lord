from django.urls import path
from .views import ConfirmRegistrationView, RegisterView, LoginView

urlpatterns = [
    path('register', RegisterView.as_view(), name='register'),
    path('login', LoginView.as_view(), name='login'),
    path('confirm', ConfirmRegistrationView.as_view(), name='confirm'),
]
