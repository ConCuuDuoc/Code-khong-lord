from django.urls import path
from .views import ConfirmRegistrationView, RegisterView, LoginView, VerifyTokenView

urlpatterns = [
    path('register', RegisterView.as_view(), name='register'),
    path('login', LoginView.as_view(), name='login'),
    path('confirm', ConfirmRegistrationView.as_view(), name='confirm'),
    path('verify-token', VerifyTokenView.as_view(), name='verify-token')
]
