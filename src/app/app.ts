import { Component, signal, AfterViewInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { CommonModule } from '@angular/common';
import { SharedModule } from "./shared/shared.module";
import { filter } from 'rxjs/operators';
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

  constructor(private router: Router) { }

  ngAfterViewInit() {
    // Pertama kali halaman dimuat
    initFlowbite();

    // jalankan setiap kali route berubah
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          initFlowbite();
        }, 0);
      });
  }

}
