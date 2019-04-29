from django.urls import path
from api import views

urlpatterns = [
    path('api/users/', views.UserList.as_view()),
    path('api/login/', views.login),
    path('api/logout/', views.logout),
    # generic_cbv
    path('api/task_lists/', views.TaskLists.as_view()),
    path('api/task_lists/<int:pk>/', views.taskList.as_view()),
    path('api/task_lists/<int:pk2>/tasks/<int:pk>/', views.TaskListTask.as_view()),
    path('api/task_lists/<int:pk>/tasks/', views.TaskListTasks.as_view())

    # cbv
    # path('api/task_lists/', views.TaskLists.as_view()),
    # path('api/task_lists/<int:pk>/', views.TaskListsTask.as_view()),
    # path('api/task_lists/<int:pk2>/tasks/<int:pk>/', views.Task.as_view()),
    # path('api/task_lists/<int:pk>/tasks/', views.Tasks.as_view())

    # fbv
    # path('api/task_lists/', views.TaskLists),
    # path('api/task_lists/<int:pk>/', views.taskList),
    # path('api/task_lists/<int:pk2>/tasks/<int:pk>/', views.TaskListsTask),
    # path('api/task_lists/<int:pk>/tasks/', views.Tasks)
]