import { Component } from '@angular/core';
import { TaskService, Task } from '../../services/task.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  task = {
    id: 0,
    name: '',
    assigned: '',
    asigment: '',
    difficulty: '',
    priority: '',
    startdate: '',
    enddate: '',
    description: ''
  };

  isEdit = false;

  constructor(
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  showAlert = false;
  alertMessage = '';

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    if (id) {
      this.isEdit = true;
      const data = this.taskService.getTasks().find(t => t.id == id);
      if (data) {
        this.task = { ...data };
      }
    }
  }
  submitForm(form: any) {
    if (this.isEdit) {
      this.taskService.updateTask(this.task);
      this.alertMessage = 'Task updated successfully!';
    } else {
      this.taskService.addTask(this.task);
      this.alertMessage = 'Task added successfully!';
    }

    this.showAlert = true;

    this.router.navigate(['/task-list']);
  }


  closeAlert(): void {
    this.showAlert = false;
  }
}
