import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-taskview',
  templateUrl: './taskview.component.html',
  styleUrls: ['./taskview.component.scss']
})
export class TaskviewComponent implements OnInit {

  constructor(private taskService: TaskService) { }

  ngOnInit() {
  }
  createnewList(){
    this.taskService.createList('Testing').subscribe((response: any) =>{
      console.log(response);
    });
  }
}
