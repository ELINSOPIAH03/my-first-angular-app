import { Injectable } from '@angular/core';

export interface Task {
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
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }

  clearTasks() {
    this.tasks = [];
  }
}
