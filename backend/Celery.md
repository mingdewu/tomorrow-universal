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



here is some example code:
  from django.shortcuts import render
  from django.ciews.generic import View
  from .form impor FormTestFOrm, SaveDataForm,SaveFileInDjangoFOrm
  from .models import SaceDataModel,SaveFileDjangoModel,MyModel
  from django.core.paginator import Paginator
  import matplotlib.pyplot as plt
  from io import StringIO
  from django.http import JsonResponse
  
  class DynamicPageView(View):
      def get(self,request):
          return render(request,@dynamic_load.html)
          
  class ShoowAjaxView(View):
      name = request.GET.get("name")
      age = request.GET("age")
      string = "name:{} old:{}.format(name,age)
      return JsonResponse(string,safe=False)
      
      
[Django使用Ajax异步传输数据（一）前后端数据的交互、解析与展示](https://blog.csdn.net/weixin_35757704/article/details/127297338?ops_request_misc=&request_id=&biz_id=102&utm_term=django%20%E5%BC%82%E6%AD%A5%E9%80%9A%E4%BF%A1&utm_medium=distribute.pc_search_result.none-task-blog-2~all~sobaiduweb~default-9-127297338.nonecase&spm=1018.2226.3001.4187)
