import { Component, AfterViewInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#example').DataTable();
    });
  }

}
