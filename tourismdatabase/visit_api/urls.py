from django.urls import path
from .views import  visitView,visitDetails
from . import views

app_name = 'visit_api'

urlpatterns = [
  path('visit/', visitView.as_view(), name='visit_api'),
  path('visit/<int:pk>',visitDetails.as_view(),name='visitDetails'),
]