from django.urls import path
from .views import  PostView,blogsDetails
from . import views

app_name = 'blog_api'

urlpatterns = [
  path('blogs/', PostView.as_view(), name='blogs'),
  path('blogs/<int:pk>',blogsDetails.as_view(),name='blogsDetails'),
]