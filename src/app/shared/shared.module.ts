import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { TaskComponent } from './modules/task/task.component';

import { RouterModule } from '@angular/router';
import { TitleComponent } from './components/title/title.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    CardComponent,
    DashboardComponent,
    TaskComponent,
    TitleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    CardComponent,
    RouterModule,
  ]
})
export class SharedModule { }
