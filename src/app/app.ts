import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { SharedModule } from "./shared/shared.module";
@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [
    CommonModule, 
    RouterOutlet, 
    SharedModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-first-angular-app');

  dummyData = [
    { title: 'Card Title', content: 'This is some card content.' },
    { title: 'Another Card', content: 'More content in another card.' },
    { title: 'Third Card', content: 'More content in a third card.' },
    { title: 'Fourth Card', content: 'More content in a fourth card.' },
    { title: 'Fifth Card', content: 'More content in a fifth card.' },
  ];

  showAlert = false;
  alertMessage = '';

  ngAfterViewInit() {
    initFlowbite();
  }

  ShowAlert(title: string): void {
    console.log('alert ', title);
    this.showAlert = true;
    this.alertMessage = title;
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
