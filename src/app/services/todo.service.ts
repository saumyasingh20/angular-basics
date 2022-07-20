import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ToDos } from '../model/ToDo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string='http://jsonplaceholder.typicode.com/todos'

  constructor( private httpClient:HttpClient) { }

  getTodos(){
    return this.httpClient.get<ToDos[]>(this.url);
  }
}
