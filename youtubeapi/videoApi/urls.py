from django.urls import path
from .views import GetVideoAPI

urlpatterns = [
    path('search', GetVideoAPI.as_view(), name='search'),
]
