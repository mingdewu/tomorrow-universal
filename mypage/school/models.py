from django.db import models

# Create your models here.
class schoolworks(models.Model):
    DIFFICULTY_LEVELS = (
        ("简单","简单"),
        ("一般","一般"),
        ("难","难"),
    )
    QUALITY = (
        ("好","好"),
        ("一般","一般"),
        ("不好","不好"),
    )
    classify = models.CharField(max_length=100)
    name = models.CharField(max_length=50)
    picture = models.FileField()
    difficulty = models.CharField(choices=DIFFICULTY_LEVELS,max_length=100)
    date = models.CharField(max_length=50)
    study_quality = models.CharField(choices=QUALITY,max_length=100)

    def __str_(self):
        return "{} 今天的学习".format(self.name)