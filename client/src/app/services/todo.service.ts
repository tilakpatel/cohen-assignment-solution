import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../model/todo';

@Injectable()
export class TodoService {

    public todos: Todo[] = [];
    constructor(private http: HttpClient) { }
  
    addNewTodo(data: any) {
        return this.http.post("http://localhost:3000/todos", {
            ...data
        });
    }

    getAllTodos() {
        return this.http.get("http://localhost:3000/todos");     
    }
    
    getTodoById(id: number) {
        var todoArray = JSON.parse(localStorage.getItem('localData'));       
        console.log(todoArray);
        return todoArray
          .filter(todo => todo.id === id)
          .pop();
    }
  
    updateTodoById(id, done) {

        return this.http.put("http://localhost:3000/todos/"+id, {done});
    }
    
    deleteTodoDetail(id) {
        return this.http.delete("http://localhost:3000/todos/"+id);
    };    
}
