import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {
  isModalActive: boolean = false;
  isModalActiveTask: boolean = false;

  constructor(private taskService: TaskService,private Route: ActivatedRoute) { }
  lists: any[];
  tasks: any[];
  idoflist: any[];
  ngOnInit() {
    this.Route.params.subscribe((params: Params)=>{
        {
          console.log(params);
          this.taskService.getTask(params.listId).subscribe((tasks: any[])=>{
            this.tasks = tasks;
          });
        }
    });
    this.taskService.getList().subscribe((lists: any[])=>{
      this.lists = lists;
      console.log(lists);
   });
  }
  openDialog(){
      this.isModalActive = !this.isModalActive;
  }
  openTaskDialog(){
    this.isModalActiveTask = !this.isModalActiveTask;
  }
  createnewList(title: String){
  this.taskService.createList(title).subscribe((response: any) =>{
      console.log(response);
      this.closeModelTask();
      window.location.reload();
    });
  }

  createnewListTask(title: String){
    this.Route.params.subscribe((params: Params)=>{
      this.taskService.createListTask(title,params.listId).subscribe((response: any) =>{
        console.log(response);
        this.closeModelTask();
        window.location.reload();
      });
    });
   
    }

  closeModelTask(){
    this.isModalActive = false;
    this.isModalActiveTask = false;
  }
}
