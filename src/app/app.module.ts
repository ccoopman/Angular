import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// RUTAS
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';
import { Error404Component  } from './shared/error/404/error404.component';
import { DashboardComponent  } from './pages/dashboard/dashboard.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagesComponent } from './pages/pages.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { RegisterComponent } from './login/register.component';
import { Login2Component } from './login/login2.component';
import { Register2Component } from './login/register2.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Error404Component,
    DashboardComponent,
    BreadcrumbsComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PagesComponent,
    ProgressComponent,
    RegisterComponent,
    Login2Component,
    Register2Component,
  ],
  imports: [
    BrowserModule,
    APP_ROUTES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
