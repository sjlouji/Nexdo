import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {
  isModalActive: boolean = false;
  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
  openDialog(){
      this.isModalActive = !this.isModalActive;
  }

  createnewList(title: String){
  this.taskService.createList(title).subscribe((response: any) =>{
      console.log(response);
      this.closeModelTask();
    });
  }
  closeModelTask(){
    this.isModalActive = false;
  }
}
