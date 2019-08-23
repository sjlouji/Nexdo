import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebRequestService {
  readonly Root_URL;

  constructor(private Http: HttpClient) { 
    this.Root_URL = 'http://localhost:3000';
  }
  get(uri: String){
    return this.Http.get(`${this.Root_URL}/${uri}`);
  }
  post(uri: String,payload: Object){
    return this.Http.post(`${this.Root_URL}/${uri}`,payload);
  }
  patch(uri: String,payload: Object){
    return this.Http.patch(`${this.Root_URL}/${uri}`,payload);
  }
  delete(uri: String){
    return this.Http.delete(`${this.Root_URL}/${uri}`);
  }

}
