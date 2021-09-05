from rest_framework import serializers
from visit.models import visit
class visitSerializer(serializers.ModelSerializer):

    
    class Meta:
        model = visit
        fields = "__all__"