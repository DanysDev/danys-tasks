import { Routes } from '@angular/router';

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
        path: 'auth',
        loadChildren: () => import('./pages/auth/auth.routes').then((r) => r.AUTHENTICATION_ROUTES),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  }
];
