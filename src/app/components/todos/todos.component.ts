import { Component, OnInit } from '@angular/core';

import { TodoService } from 'src/app/services/todo.service';
import { ToDos } from 'src/app/model/ToDo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:ToDos[]=[];

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todoService.getTodos().subscribe((data:any[])=>{
      console.log("todos")
      console.log(data)
      this.todos = data
    })
  }

}
