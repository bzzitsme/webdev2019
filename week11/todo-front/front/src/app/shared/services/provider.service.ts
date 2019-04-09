import { Injectable, EventEmitter } from '@angular/core';
import { MainService } from './main.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TaskList,Task } from '../models/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService extends MainService{

  public sendMessage = new EventEmitter<string>();1

  constructor(http: HttpClient) {
    super(http);
   }

  //  getTaskLists(): Promise<TaskList[]>{
  //    return this.get('http://localhost:8000/api/task_lists/', {});
  //  }

  getTaskLists(): Observable<any> {
    const options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }
    }
    return this.http.get('http://localhost:8000/api/task_lists', options);
  }

   getTasks(task_lists: TaskList): Promise<Task[]>{
     return this.get(`http://localhost:8000/api/task_lists/${task_lists.id}/tasks/`,{});
   }
}
