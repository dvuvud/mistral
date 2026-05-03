import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * HTTP-interceptor som lägger till Authorization-header med JWT-token
 * på utgående requests när en token finns i localStorage.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

/**
  * Interceptar en HTTP-request och lägger till auth-header om token finns.
  *
  * @param req Den utgående HTTP-requesten.
  * @param next Nästa handler i interceptor-kedjan.
  * @returns En Observable med HTTP-händelser från den skickade requesten.
  */
  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = sessionStorage.getItem('token');

    if (!token) {
      return next.handle(req);
    }

    const authReq = req.clone({
      setHeaders: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        'ngrok-skip-browser-warning': 'true'
      }
    });

    return next.handle(authReq);
  }
}
