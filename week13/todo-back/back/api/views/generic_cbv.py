from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from api.models import TaskList, Task
from api.serializers import TaskListSerializer2, TaskSerializer2, UserSerializer
from django.contrib.auth.models import User

# /api/task_lists/
class TaskLists(generics.ListCreateAPIView):
    def get_queryset(self):
        return TaskList.objects.for_user(self.request.user)
    serializer_class = TaskListSerializer2
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)

# /api/task_lists/<int:pk>/
class taskList(generics.RetrieveUpdateDestroyAPIView):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer2

# /api/task_lists/<int:pk>/tasks/
class TaskListTasks(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return Task.objects.filter(task_list=self.kwargs['pk'])

    def get_serializer_class(self):
        return TaskSerializer2

    def perform_create(self, serializer):
        t_list = self.request.data.pop('task_list')
        task_list = TaskList(t_list['id'], t_list['name'])
        serializer.save(task_list=task_list)

# /api/task_lists/<int:pk2>/tasks/<int:pk>/
class TaskListTask(generics.RetrieveUpdateDestroyAPIView):

    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        print(self.kwargs)
        return Task.objects.all()

    def get_serializer_class(self):
        return TaskSerializer2

    def perform_update(self, serializer):
        t_list = self.request.data.pop('task_list')
        task_list = TaskList(t_list['id'], t_list['name'])
        serializer.save(task_list=task_list)