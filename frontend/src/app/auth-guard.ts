import { ActivatedRouteSnapshot, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const url: string = route.url.join('');
  const router = inject(Router);
  const authService = inject(AuthService);
  const role = authService.getRole();

  switch (url) {
    case '': // Redirect users already signed in from login page to /app
      if (!role) {
        return true;
      }
      if (role === 'ADMIN') {
        return router.parseUrl('/admin');
      }
      return router.parseUrl('/app');

    case 'app': // Redirect non-authorized clients from /app to login page
      if (!role) {
        return router.parseUrl('/');
      }
      if (role === 'ADMIN') {
        return router.parseUrl('/admin');
      }
      return true;

    case 'admin':
      if (!role) {
        return router.parseUrl('/');
      }
      if (role !== 'ADMIN') {
        return router.parseUrl('/app');
      }
      return true;

    default:
      return false;
  }

};
