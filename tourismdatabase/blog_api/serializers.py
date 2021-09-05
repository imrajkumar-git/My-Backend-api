from rest_framework import serializers
from blog.models import blogs
class PostSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = blogs
        fields = "__all__"