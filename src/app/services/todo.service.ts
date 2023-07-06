import { Injectable } from '@angular/core';
import{HttpClient,HttpHeaders}from '@angular/common/http';
import{Observable} from 'rxjs';
import { Todo } from 'Todo';
// import { Todo } from '../Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private apiUrl = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) { }


  getTodos(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl);
  }


}
