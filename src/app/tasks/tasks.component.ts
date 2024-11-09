import { Component, inject, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { AddTaskComponent } from "./add-task/add-task.component";
import { addTask } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
@Input({required: true}) selectedUserId!: string;
@Input({required: true}) name!: string;
isStartAddNewTask = false;

private tasksService = inject(TasksService)

public get selectedUser() {
  return this.tasksService.getSelectedUserId(this.selectedUserId)
}

onStartAddingTask (){
  this.isStartAddNewTask = true
}

onCancelAddingTask() {
  this.isStartAddNewTask = false
}

}
