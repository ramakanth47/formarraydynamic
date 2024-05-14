import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ITodo } from './models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor(private httpClient:HttpClient) {
    
   }

   getTodoData():Observable<ITodo>
   {
    let appHeaders:HttpHeaders = new HttpHeaders();
       
    return this.httpClient.post<ITodo>("http:localhost:3000/",{name:"hellio"},{headers:appHeaders});
   }


   
}
