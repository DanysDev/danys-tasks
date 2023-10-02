import { Routes } from '@angular/router';
import {userLoguinGuard} from "./core/guards/user-loguin.guard";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/full-layout/full-layout.component').then(c => c.FullLayoutComponent),
    children: [
      {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
        title: 'Danys Tasks',
      },
      {
        path: 'tasks',
        loadChildren: () => import('./pages/tasks-page/tasks.routes').then((c) => c.TASKS_ROUTES),
        canActivate: [userLoguinGuard],
        title: 'Gestor de Tareas'
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.routes').then((r) => r.AUTHENTICATION_ROUTES),
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
