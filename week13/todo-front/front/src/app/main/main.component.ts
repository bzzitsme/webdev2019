import { Component, OnInit } from '@angular/core';
import {ProviderService} from '../services/provider.service'
import {ITask, ITaskList} from '../models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public taskLists: ITaskList[] = [];
  public tasks: ITask[] = [];

  // public name: any = '';
  public name = '';

  public logged = false;
  public targetTaskList: ITaskList;

  public login: any = '';
  public password: any = '';


  constructor(private provider: ProviderService) { }

  ngOnInit() {

    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }
    if (this.logged) {
      this.provider.getTaskLists().then(res => {
        this.taskLists = res;
      });
    }
  }

  getTasks(task: ITaskList) {
    this.provider.getTasks(task).then(res => {
      this.tasks = res;
    });
  }
  updateTaskList(t: ITaskList) {
    this.provider.updateTaskList(t).then(res => {
      console.log(t.name + ' updated');
    });
  }

  deleteTaskList(t: ITaskList) {
    this.provider.deleteTaskList(t.id).then(res => {
      console.log(t.name + ' deleted');
      this.provider.getTaskLists().then(r => {
        this.taskLists = r;
      });
    });
  }

  createTasklist() {
    if (this.name !== '') {
      this.provider.createTaskList(this.name).then(res => {
        this.name = '';
        this.taskLists.push(res);
      });
    }
  }

  auth() {
    if (this.login !== '' && this.password !== '') {
      this.provider.auth(this.login, this.password).then(res => {
        localStorage.setItem('token', res.token);
        this.logged = true;
        this.provider.getTaskLists().then(r => {
          this.taskLists = r;
        });
      });
    }
  }

  logout() {
    this.provider.logout().then(res => {
      localStorage.clear();
      this.logged = false;
    });
  }
}






// do not workin
// import { Component, OnInit } from '@angular/core';
// import {TaskList, Task} from '../models/models';
// import {ProviderService} from '../services/provider.service';

// @Component({
//   selector: 'app-main',
//   templateUrl: './main.component.html',
//   styleUrls: ['./main.component.css']
// })
// export class MainComponent implements OnInit {
//   public taskLists: TaskList[] = [];
//   public tasks: Task[] = [];
//   public name = '';
//   public targetTaskList: TaskList;
//   public username = '';
//   public password = '';
//   public logged = false;
//   constructor(private provider: ProviderService) { }

//   ngOnInit() {
//     const token = localStorage.getItem('token');
//     if (token) {
//       this.logged = true;
//     }
//     if (this.logged) {
//       this.provider.getTaskLists().then(res => {
//         this.taskLists = res;
//       });
//     }
//   }
//   getTaskOfTaskList(taskList: TaskList) {
//     this.targetTaskList = taskList;
//     this.provider.getTasks(taskList.id).then(res => {this.tasks = res; });
//   }

//   createTaskList() {
//       if (this.name !== '') {
//         this.provider.createTaskList(this.name).then(res => {
//           this.name = '';
//           this.taskLists.push(res);
//         });
//       }
//   }

//   updateTaskList(taskList: TaskList) {
//     this.provider.updateTaskList(taskList).then(res => {});
//   }

//   deleteTaskList(taskList: TaskList) {
//     this.provider.deleteTaskList(taskList).then(res => {
//       this.provider.getTaskLists().then(r => {
//         this.taskLists = r;
//       });
//     });
//   }

//   updateTask(task: Task) {
//     this.provider.updateTask(task).then(res => {});
//   }

//   deleteTask(task: Task) {
//     this.provider.deleteTask(task).then(res => {
//       this.provider.getTasks(task.task_list.id).then(r => {
//         this.tasks = r;
//       });
//     });
//   }

//   login() {
//     if (this.username !== '' && this.password !== '') {
//       console.log(this.username);
//       console.log(this.password);
//       this.provider.auth(this.username, this.password).then(res => {
//         console.log(res.token);
//         localStorage.setItem('token', res.token);
//         this.logged = true;

//         this.provider.getTaskLists().then(r => {
//           this.taskLists = r;
//         });

//       });
//     }
//   }
//   logout() {
//     this.provider.logout().then(res => {
//       localStorage.clear();
//       this.logged = false;
//     });
//   }
//     /*createTask() {
//       let createdTask: Task;
//       createdTask.name = this.name;
//       createdTask.status = this.taskStatus;
//       createdTask.created_at = Date.now();
//       createdTask.due_on = Date.now() + (1000 * 60 * 60 * 24);
//       createdTask.task_list = this.targetTaskList;
//       this.provider.createTask(createdTask).then(res => {
//         this.taskName = '';
//         this.taskStatus = '';
//       });
//     }*/
// }