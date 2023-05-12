from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SchoolWorksSerializer
from .models import SchoolWorks
# Create your views here.

class SchoolWorksViewSet(viewsets.ModelViewSet):
    serializer_class = SchoolWorksSerializer
    queryset = SchoolWorks.objects.all()