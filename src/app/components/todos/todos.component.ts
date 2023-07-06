import { Component, OnInit } from '@angular/core';
import { Todo } from 'Todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {}
    
 ngOnInit(): void {
   this.todoService.getTodos().subscribe({
    next:(data:any) =>{
      this.todos = data.todos
    },
    error:(err:any) =>{
      console.log("error ",err)
    }
   })
 }
}
