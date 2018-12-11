import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { DashboardComponent  } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { Error404Component } from './shared/error/404/error404.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Login2Component } from './login/login2.component';
import { RegisterComponent } from './login/register.component';
import { Register2Component } from './login/register2.component';

const appRoutes: Routes = [
    { path: ''
        , component: PagesComponent
        , children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },

    { path: 'login', component: LoginComponent },
    { path: 'login2', component: Login2Component },
    { path: 'register', component: RegisterComponent },
    { path: 'register2', component: Register2Component },
    { path: 'error404', component: Error404Component },
    { path: '**', redirectTo: '/error404', pathMatch: 'full' }
//    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );