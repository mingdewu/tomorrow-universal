install 
pip install Django-celery 

pip install Django-redis


in setting.py
  add 'djcelery' into INSTALLED_APP
 
 create celery.py and tasks.py in settings.py 's folder
 
 celery.py is setting of celery
 
 tasks is a asyn task list
 
 from celery import task
 import time
 @task
 def task1():
    time.sleep(10)
    
in views.py
django_proj/proj/__init__.py
from .celery import app as celery_app

__all__ = ('celery_app')
