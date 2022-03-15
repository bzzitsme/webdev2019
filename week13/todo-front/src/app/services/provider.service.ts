import { Injectable } from '@angular/core';
import {MainService} from './main.service';
import {HttpClient} from '@angular/common/http';
import {IAuthResponse, ITask, ITaskList} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService {
  constructor(http: HttpClient) {
    super(http);
  }

  getTaskLists(): Promise<ITaskList[]> {
    return this.get('http://localhost:8000/api/task_lists/', {});
  }

  getTasks(task: ITaskList): Promise<ITask[]> {
    return this.get(`http://localhost:8000/api/task_lists/${task.id}/tasks/`, {});
  }
  createTaskList(n: any): Promise<ITaskList> {
    return this.post('http://localhost:8000/api/task_lists/', {
      name: n
    });
  }

  updateTaskList(tasklist: ITaskList): Promise<ITaskList> {
    return this.put(`http://localhost:8000/api/task_lists/${tasklist.id}/`, {
      name: tasklist.name
    });
  }

  deleteTaskList(id: number): Promise<any> {
    return this.delet(`http://localhost:8000/api/task_lists/${id}/`, {});
  }

  auth(login: any, passwordd: any): Promise<IAuthResponse> {
    return this.post(`http://localhost:8000/api/login/`, {
      username: login,
      password: passwordd
    });
  }

  logout(): Promise<any> {
    return this.post(`http://localhost:8000/api/logout/`, {});
  }
}


















// import { EventEmitter, Injectable } from '@angular/core';
// import {TaskList, Task, Token} from '../models/models';
// import {HttpClient, HttpParams} from '@angular/common/http';
// import {MainService} from './main.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class ProviderService extends MainService {
//   constructor(http: HttpClient) {
//     super(http);
//   }

//   getTaskLists(): Promise<TaskList[]> {
//     return this.get('http://127.0.0.1:8000/api/task_lists/',  {});
//   }
//   getTasks(id: number) {
//     return this.get(`http://localhost:8000/api/task_lists/${id}/tasks/`, {});
//   }
//   createTaskList(namE: string): Promise<TaskList> {
//     return this.post('http://localhost:8000/api/task_lists/', {name: namE});
//   }
//   updateTaskList(taskList: TaskList) {
//     return this.put('http://localhost:8000/api/task_lists/' + taskList.id, {name : taskList.name});
//   }

//   deleteTaskList(taskList: TaskList) {
//     return this.delet('http://localhost:8000/api/task_lists/' + taskList.id, {});
//   }

//   updateTask(task: Task) {
//     return this.put('http://localhost:8000/api/task_lists/' + task.task_list.id + '/tasks/' + task.id, {
//       name: task.name,
//       task_list: task.task_list,
//       status: task.status,
//       created_at: task.created_at,
//       due_on: task.due_on
//     });
//   }

//   /*createTask(task: Task) {
//       return this.post('http://localhost:8000/api/task_lists/' + taskList.id + '/tasks/', {
//         name: task.name,
//         task_list: task.task_list,
//         status: task.status,
//         created_at: task.created_at,
//         due_on: task.due_on
//       });
//   }*/
//   deleteTask(task: Task) {
//     return this.delet('http://localhost:8000/api/task_lists/' + task.task_list.id + '/tasks/' + task.id, {});
//   }

//   auth(username: string, password: string): Promise<Token> {
//       return this.post('http://localhost:8000/api/login/', {
//         username: username,
//         password: password
//       });
//   }

//   logout(): Promise<any> {
//     const token = localStorage.getItem('token')
//     return this.post('http://localhost:8000/api/logout/', {token});
//   }

// }