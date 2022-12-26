from rest_framework import serializers
from .models import SchoolWorks


class SchoolWorksSerializer(serializers.ModelSerializer):
    class Meta:
        model = SchoolWorks
        fields = (
            "title",
            "classify",
            "picture",
            "date",
            "content",
        )