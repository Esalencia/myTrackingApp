import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import{HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { RouterModule, Router } from "@angular/router";

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TodosComponent } from './components/todos/todos.component';
import { AppRoutingModule } from './app-routing.module';

/*const appRoutes: Routes = [
  {path: '', Component: TasksComponent}
]
*/
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    TasksComponent,
    TaskItemComponent,
    AddTaskComponent,
    TodosComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    /*RouterModule.forRoot(appRoutes, {enableTracing: true})*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
