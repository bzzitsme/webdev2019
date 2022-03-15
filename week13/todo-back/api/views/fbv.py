from api.models import TaskList
from api.serializers import TaskListSerializer2, TaskSerializer2
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status

# /api/task_lists/
@api_view(['GET','POST'])
def TaskLists(request):
    if request.method == 'GET':
        TaskLists = TaskList.objects.all()
        serializer = TaskListSerializer2(TaskLists, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        serializer = TaskListSerializer2(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

# /api/task_lists/<int:pk>/
@api_view(['GET','PUT','DELETE'])
def taskList(request, pk):
    try:
        task = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        serializer = TaskListSerializer2(task)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = TaskListSerializer2(instance=task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        task.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

# /api/task_lists/<int:pk>/tasks/
@api_view(['GET', 'PUT'])
def Tasks(request, pk):
    try:
        t_list = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        tasks = t_list.task_set.all()
        serializer = TaskListSerializer2(tasks, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        t_list = request.data.pop('task_list')
        task_list = TaskList(t_list['id'], t_list['name'])
        serializer = TaskSerializer2(task_list=task_list, data=request.data)
        if serializer.is_valid():
            serializer.save(task_list=task_list)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE'])
def TaskListsTask(request, pk, pk2):
    try:
        t_list = TaskList.objects.get(id=pk)
    except TaskList.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'GET':
        task = t_list.task_set.get(id=pk2)
        serializer = TaskSerializer2(task, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        task = t_list.task_set.get(id=pk2)
        t_list = request.data.pop('task_list')
        task_list = TaskList(t_list['id'], t_list['name'])
        serializer = TaskSerializer2(task_list=task, data=request.data)
        if serializer.is_valid():
            serializer.save(task_list=task_list)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)
    elif request.method == 'DELETE':
        task = t_list.task_set.get(id=pk2)
        task.delete()
        return Response({}, status=status.HTTP_204_NO_CONTENT)