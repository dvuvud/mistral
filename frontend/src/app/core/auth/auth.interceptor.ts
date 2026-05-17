import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * AuthInterceptor intercepts outgoing HTTP requests.
 * Adds an Authorization header if a token is present in sessionStorage.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

/**
  * Intercepts an HTTP request and adds an Authorization header if a token is present.
  *
  * @param req The outgoing HTTP request.
  * @param next The next handler in the interceptor chain.
  * @returns An Observable with HTTP events from the sent request.
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
