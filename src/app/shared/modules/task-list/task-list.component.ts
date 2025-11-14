import { Router } from '@angular/router';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
declare var $: any;
@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements OnInit,AfterViewInit {
  tasks: Task[] = [];

  showAlert = false;
  alertMessage = '';

  constructor(private taskService: TaskService, private router: Router) { }
  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }
  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#example').DataTable();
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();

    this.showAlert = true;
    this.alertMessage = 'Task deleted successfully!';
  }

  editTask(id: number) {
    this.router.navigate(['/task', id]);
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
