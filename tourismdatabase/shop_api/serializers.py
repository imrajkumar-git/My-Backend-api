from rest_framework import serializers
from shop.models import Product,category
class ProductSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Product
        fields = "__all__"

   
class categorySerializer(serializers.ModelSerializer):
    
    class Meta:
        model = category
        fields = "__all__"

    

