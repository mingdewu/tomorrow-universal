from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import LifeLinesViewSet

router = DefaultRouter()
router.register(r"life_line",LifeLinesViewSet)
urlpatterns = [path("", include(router.urls))]