from rest_framework import serializers
from pictures.models import pictures
class picturesSerializer(serializers.ModelSerializer):

    
    class Meta:
        model = pictures
        fields = "__all__"