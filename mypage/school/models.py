from django.db import models

# Create your models here.
class SchoolWorks(models.Model):
    title = models.CharField(max_length=50)
    classify = models.CharField(max_length=50)
    picture = models.FileField()
    date = models.TextField(max_length=50)
    content = models.TextField()
    def __str_(self):
        return "{} 今天的学习".format(self.title)