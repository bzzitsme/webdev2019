from django.http import Http404
from api.models import TaskList, Task
from api.serializers import TaskListSerializer2, TaskSerializer2
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.decorators import permission_classes
from rest_framework import status

# /api/task_lists/
class TaskLists(APIView):
    def get(self, request):
        t_lists = TaskList.objects.all()
        serializer = TaskListSerializer2(t_lists, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = TaskListSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# /api/task_lists/<int:pk>/
class TaskListsTask(APIView):
    def get_object(self, pk):
        try:
            return TaskList.objects.get(id=pk)
        except TaskList.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        TaskList = self.get_object(pk)
        serializer = TaskListSerializer2(TaskList)
        return Response(serializer.data)

    def put(self, request, pk):
        TaskList = self.get_object(pk)
        serializer = TaskListSerializer2(instance=TaskList, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, pk):
        TaskList = self.get_object(pk)
        TaskList.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# /api/task_lists/<int:pk>/tasks/
class Tasks(APIView):
    def get_object(self, pk):
        try:
            return TaskList.objects.get(id=pk)
        except TaskList.DoesNotExist:
            raise Http404

    @permission_classes((IsAuthenticated,))
    def get(self, request, pk):
        t_list = self.get_object(pk)
        tasks = t_list.task_set.all()
        serializer = TaskSerializer2(tasks, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @permission_classes((IsAuthenticated,))
    def post(self, request, pk):
        t_list = request.data.pop('task_list')
        task_list = TaskList(t_list['id'], t_list['name'])
        serializer = TaskSerializer2(task_list=task_list, data=request.data)
        if serializer.is_valid():
            serializer.save(task_list=task_list)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)


# /api/task_lists/<int:pk>/tasks/<int:pk2>
class Task(APIView):

    def get_object(self, pk):
        try:
            return TaskList.objects.get(id=pk)
        except TaskList.DoesNotExist:
            raise Http404

    def get(self, request, pk, pk2):
        t_list = self.get_object(pk)
        try:
            task = t_list.task_set.get(id=pk2)
        except Task.DoesNotExist as e:
            return Response({'error': str(e)})
        serializer = TaskSerializer2(task)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def put(self, request, pk, pk2):
        t_list = self.get_object(pk)
        data = request.data
        try:
            task = t_list.task_set.get(id=pk2)
            t_list = data.pop('task_list')
            taskList = TaskList(t_list['id'], t_list['name'])
            serializer = TaskSerializer2(instance=task, data=data)
            if serializer.is_valid():
                serializer.save(task_list=taskList)
                return Response(serializer.data)
            return Response(serializer.errors)
        except Task.DoesNotExist as e:
            return Response({'error': str(e)})

    def delete(self, request, pk, pk2):
        t_list = self.get_object(pk)
        task = t_list.task_set.get(id=pk2)
        task.delete()
        return Response({}, status=status.HTTP_204_NO_CONTENT)