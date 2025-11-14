import { Injectable } from '@angular/core';

export interface Task {
  id: number;
  name: string;
  assigned: string;
  asigment: string;
  difficulty: string;
  priority: string;
  startdate: string;
  enddate: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: any[] = [];

  constructor() { }
  addTask(task: Task) {
    task.id = Date.now();
    this.tasks.push(task);
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
  }

  getTasks() {
    return this.tasks;
  }

  clearTasks() {
    this.tasks = [];
  }
}
