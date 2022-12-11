from django.db import models

# Create your models here.
class LifeLines(models.Model):
    theme = models.CharField(max_length=120)
    picture = models.FileField()
    content = models.CharField(max_length=500)