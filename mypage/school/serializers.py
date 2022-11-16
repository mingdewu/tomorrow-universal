from rest_framework import serializers
from .models import schoolworks


class schoolworksSerializer(serializers.ModelSerializer):
    class Meta:
        model = schoolworks
        fields = (
            "classify",
            "name",
            "picture",
            "difficulty",
            "ate",
            "study_quality",
        )