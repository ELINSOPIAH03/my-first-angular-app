import { Routes } from '@angular/router';

import { DashboardComponent } from './shared/modules/dashboard/dashboard.component';
import { TaskComponent } from './shared/modules/task/task.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'task', component: TaskComponent },
];
