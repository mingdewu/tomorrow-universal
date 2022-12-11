from rest_framework import serializers
from .models import LifeLines

class LifeLinesSerializer(serializers.ModelSerializer):
    class Meta:
        model = LifeLines
        fields = (
            "theme",
            "picture",
            "content",
        )