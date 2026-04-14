import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { MainPage } from './main-page/main-page';

export const routes: Routes = [
  {
    path: '', // Detta innebär att rotsidan alltid kommer vara LoginPage. TODO: Detta borde redirectas till /app om man redan är inloggad
    component: LoginPage
  },
  {
    path: 'app', // Detta innebär att localhost:4200/app leder till main-page komponenten.
    component: MainPage
  }
];
