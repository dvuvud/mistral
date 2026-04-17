import { Routes } from '@angular/router';
import { LoginPage } from './routes/login-page/login-page';
import { MainPage } from './routes/main-page/main-page';
import { authGuard } from './auth-guard';
import { AdminPage } from './routes/admin-page/admin-page';

export const routes: Routes = [
  {
    canActivate: [authGuard],
    path: '', // Detta innebär att rotsidan alltid kommer vara LoginPage. TODO: Detta borde redirectas till /app om man redan är inloggad
    component: LoginPage
  },
  {
    canActivate: [authGuard],
    path: 'app', // Detta innebär att localhost:4200/app leder till main-page komponenten.
    component: MainPage
  },
  {
    path: 'admin',
    component: AdminPage
  }
];
