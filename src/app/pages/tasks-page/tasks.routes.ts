import { Routes } from '@angular/router';

export const TASKS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./tasks.component').then((c) => c.TasksComponent),
    children: [
      {
        path: 'tasks',
        loadComponent: () => import('./pages/home-task/home-task.component').then((c) => c.HomeTaskComponent),
      },
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
      }
    ]
  }
];
