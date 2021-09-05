

# Create your views here.
from blog.models import blogs
from .serializers import PostSerializer
from rest_framework import generics

class PostView(generics.ListCreateAPIView):
    queryset = blogs.objects.all()
    serializer_class = PostSerializer

class blogsDetails(generics.RetrieveDestroyAPIView):
    queryset = blogs.objects.all()
    serializer_class = PostSerializer
