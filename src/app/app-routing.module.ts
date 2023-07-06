import { NgModule } from '@angular/core';
import { RouterModule,Route } from "@angular/router";
import { TasksComponent } from './components/tasks/tasks.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Route[]=[
  
  {
    path: 'todo', 
    component:TodosComponent
  },
  {
    path: '', 
    component:TasksComponent
  },
]


@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule],
  
})
export class AppRoutingModule { }
