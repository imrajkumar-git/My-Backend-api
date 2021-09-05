from django.shortcuts import render

# Create your views here.
from pictures.models import  pictures
from .serializers import picturesSerializer
from rest_framework import generics

class picturesView(generics.ListCreateAPIView):
    queryset = pictures.objects.all()
    serializer_class = picturesSerializer

class picturesDetails(generics.RetrieveDestroyAPIView):
    queryset = pictures.objects.all()
    serializer_class = picturesSerializer
