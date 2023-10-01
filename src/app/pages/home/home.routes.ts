import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home.component').then(c => c.HomeComponent),
    title: 'Danys Tasks',
    children: []
  }
];
