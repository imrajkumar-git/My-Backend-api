from shop.models import Product,category
from .serializers import ProductSerializer,categorySerializer
from rest_framework import generics

class ProductView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class ProductDetails(generics.RetrieveDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class categoryView(generics.ListCreateAPIView):
    queryset = category.objects.all()
    serializer_class = categorySerializer

class categoryDetails(generics.RetrieveAPIView):
    queryset = category.objects.all()
    serializer_class = categorySerializer
