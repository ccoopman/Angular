import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent  } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Error404Component  } from './shared/error/404/error404.component';

const appRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'error404', component: Error404Component },
    { path: '**', redirectTo: '/error404', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );