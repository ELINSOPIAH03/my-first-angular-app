import { Component } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = {
    name: '',
    assigned: '',
    asigment: '',
    difficulty: '',
    priority: '',
    startdate: '',
    enddate: '',
    description: ''
  };

  constructor(private taskService: TaskService) { }
  showAlert = false;
  alertMessage = '';
  submitForm(form: any) {
    const task: Task = form.value;
    this.taskService.addTask(task);
    form.reset();
    
    this.showAlert = true;
    this.alertMessage = 'Task added successfully!';
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
