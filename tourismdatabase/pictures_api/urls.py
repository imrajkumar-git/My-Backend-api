from django.urls import path
from .views import  picturesView,picturesDetails
from . import views

app_name = 'pictures_api'

urlpatterns = [
  path('pictures/', picturesView.as_view(), name='pictures_api'),
  path('pictures/<int:pk>',picturesDetails.as_view(),name='picturesDetails'),
]