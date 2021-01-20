import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';


@Component({
    selector: 'app-todo-list',
    templateUrl: './todo-list.component.html',
    styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
    public todos: any[] = [];
    constructor( private router: Router, private todoService: TodoService) { }
    
    ngOnInit() {
        this.loadAllTodoList();    
    }

    loadAllTodoList() {
        this.todoService.getAllTodos().subscribe((res:any[]) => {
            this.todos = res;
        });
    }
    
    onClickAddTodo() {
        this.router.navigate(['/todo-detail']);
    }
    
    onClickTodoDelete(id) {
        this.todoService.deleteTodoDetail(id).subscribe((res: any[]) => {
            this.todos = res;
        });
    }

    onTaskComplete(id, $evt){

        this.todoService.updateTodoById(id, $evt.target.checked).subscribe((res: any[]) => {
            this.todos = res;
        });
    }
}
