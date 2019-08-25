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
  getList(){
    return this.WebRequestService.get('list');
  }
  getTask(listId: string){
    return this.WebRequestService.get(`list/${listId}/tasks`);
  }
  createListTask(title: String,listid: string){
    return this.WebRequestService.post(`list/${listid}/tasks`,{title});
  }
}
