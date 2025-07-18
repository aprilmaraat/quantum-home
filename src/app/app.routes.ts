import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
    { 
        path: '',
        loadComponent: () => import('./components/dashboard/dashboard').then(c => c.Dashboard),
        canActivate: [AuthGuard]
    },
    { 
        path: 'dashboard',
        loadComponent: () => import('./components/dashboard/dashboard').then(c => c.Dashboard),
        canActivate: [AuthGuard]
    },
    { 
        path: 'login',
        loadComponent: () => import('./components/login/login').then(c => c.Login)
    },
];
