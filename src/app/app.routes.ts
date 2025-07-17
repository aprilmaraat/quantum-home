import { Routes } from '@angular/router';
import { Login } from './components/login/login';

export const routes: Routes = [
    { 
        path: '',
        loadComponent: () => import('./components/login/login').then(c => c.Login)
    },
    { 
        path: 'login',
        loadComponent: () => import('./components/login/login').then(c => c.Login)
    },
];
