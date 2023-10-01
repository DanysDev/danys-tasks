import { Routes } from '@angular/router';
import {AuthComponent} from "./auth.component";

export const AUTHENTICATION_ROUTES: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'register',
        loadComponent: () => import('./pages/register/register.component').then((c) => c.RegisterComponent),
        title: 'Registro'
      },
      {
        path: 'login',
        loadComponent: () => import('./pages/login/login.component').then((c) => c.LoginComponent),
        title: 'Login'
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  }
];
