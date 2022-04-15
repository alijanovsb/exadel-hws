import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoInterceptor } from './todo.interceptor';

@NgModule({
  declarations: [TodoComponent, TodoListComponent],
  imports: [CommonModule, SharedModule],
  exports: [TodoComponent],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TodoInterceptor, multi: true },
  ],
})
export class TodoModule {}
