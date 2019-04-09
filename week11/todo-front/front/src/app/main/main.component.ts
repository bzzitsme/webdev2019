import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../shared/services/provider.service';
import { TaskList, Task } from '../shared/models/models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  public task_lists: TaskList[] = [];
  public loading = false;

  public tasks: Task[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
    // this.provider.getTaskLists().then(res=>{
    //   this.task_lists = res;
    //   this.loading = true;
    // });
    this.provider.getTaskLists().subscribe(res=>{
      console.log(res);
      
    });
  }

  getTasks(task_lists: TaskList){
    this.provider.getTasks(task_lists).then(res=>{
      this.tasks = res;
    })
  }

}
