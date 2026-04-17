import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './core/auth/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const url: string = route.url.join('');
  const router = inject(Router);
  const authService = inject(AuthService);
  const isAuthed: boolean = await authService.isAuthorized();

  switch (url) {
    case '': // Redirect users already signed in from login page to /app
      return isAuthed ? router.parseUrl("/app") : true;
    case 'app': // Redirect non-authorized clients from /app to login page
      return isAuthed ? true : router.parseUrl("/");
    default:
      return false;
  }

};
