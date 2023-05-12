from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LifeLinesSerializer
from .models import LifeLines
# Create your views here.
class LifeLinesViewSet(viewsets.ModelViewSet):
    serializer_class = LifeLinesSerializer
    queryset = LifeLines.objects.all()
