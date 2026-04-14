import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { MainPage } from './main-page/main-page';

export const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'app',
    component: MainPage
  }
];
