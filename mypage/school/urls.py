from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import SchoolWorksViewSet

router = DefaultRouter()
router.register(r"SchoolWorks",SchoolWorksViewSet)

urlpatterns = [path("", include(router.urls))]