import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  dummyData = [
    { title: 'Card Title', content: 'This is some card content.' },
    { title: 'Another Card', content: 'More content in another card.' },
    { title: 'Third Card', content: 'More content in a third card.' },
    { title: 'Fourth Card', content: 'More content in a fourth card.' },
    { title: 'Fifth Card', content: 'More content in a fifth card.' },
  ];

  showAlert = false;
  alertMessage = '';

  onReadMoreClicked(title: string) {
    this.alertMessage = `Kamu klik tombol Read More di card ${title}`;
    this.showAlert = true;
  }

  closeAlert(): void {
    this.showAlert = false;
  }
}
