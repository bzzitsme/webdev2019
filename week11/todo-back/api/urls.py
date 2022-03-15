from django.urls import path, re_path
from . import views


urlpatterns = [
    path('api/task_lists', views.task_lists),
    path(r'api/task_lists/<int:pk>/tasks/', views.task_lists_tasks),
    path('api/task_lists/<int:pk>', views.task_list),
    path('api/task_lists/<int:pk>/tasks/<int:pk2>', views.task_lists_task)
]