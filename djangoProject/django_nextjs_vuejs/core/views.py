from rest_framework import viewsets
from core.serializers import WaterPlantsSerializer
from core.models import WaterPlants


class WaterPlantsViewSet(viewsets.ModelViewSet):
    serializer_class = WaterPlantsSerializer
    queryset = WaterPlants.objects.all()