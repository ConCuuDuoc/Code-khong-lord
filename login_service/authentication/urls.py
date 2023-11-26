from django.urls import path
from .views import ConfirmRegistrationView, RegisterView, LoginView, VerifyTokenView, ForgotPasswordView, ConfirmNewPasswordView,CognitoCallbackAPIView,CognitoGoogle, CognitoLogoutView

urlpatterns = [
    path('register', RegisterView.as_view(), name='register'),
    path('login', LoginView.as_view(), name='login'),
    path('confirm', ConfirmRegistrationView.as_view(), name='confirm'),
    path('verify-token', VerifyTokenView.as_view(), name='verify-token'),
    path('forgot-password',ForgotPasswordView.as_view(),name='forgot-password'),
    path('new-password',ConfirmNewPasswordView.as_view(), name='new-password'),
    path('callback', CognitoCallbackAPIView.as_view(), name='cognito-callback'),
    path('google', CognitoGoogle.as_view(), name='cognito-google'),
    path('logout', CognitoLogoutView.as_view(), name='logout'),
]
