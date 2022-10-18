from django.shortcuts import render
from rest_framework import viewsets
from .serializers import schoolworksSerializer
from .models import schoolworks
# Create your views here.

class schoolworksViewSet(viewsets.ModelViewSet):
    serializer_class = schoolworksSerializer
    queryset = schoolworks.objects.all()