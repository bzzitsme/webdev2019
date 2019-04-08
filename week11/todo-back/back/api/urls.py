from django.urls import path, re_path
from . import views


urlpatterns = [
    # path('task_lists/', views.tasklist_list),
    # path('task_lists/<int:pk>/', views.tasklists_info),
    # path('task_lists/<int:pk>/tasks/', views.tasklist_task)
    path('', views.index),
    path('about/', views.about),
    path('time/', views.current_time),
    # path('time/2', views.current_time)
    path('products/<int:pk>', views.show_product),
    re_path(r'time/plus/(\d{1,2})/', views.current_time_plus),


    # path('api/task_lists', views.task_lists),
    # re_path(r'api/task_lists/(\d)/tasks', views.task_lists_tasks),
    # re_path(r'api/task_lists/(\d)', views.task_list)
]