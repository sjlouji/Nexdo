import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private WebRequestService: WebRequestService) { 

  }
  createList(title: String){
    return this.WebRequestService.post('list',{title});
  }
}
