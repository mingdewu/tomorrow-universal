from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import schoolworksViewSet

router = DefaultRouter()
router.register(r"schoolworks",schoolworksViewSet)

urlpatterns = [path("", include(router.urls))]