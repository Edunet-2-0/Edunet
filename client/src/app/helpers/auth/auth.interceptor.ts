import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtService } from '../../services/auth/jwt.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: JwtService) {}

  intercept(
    request: HttpRequest<unknown>, 
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Fetching access token stored in browser
    const token = this.authService.getToken();
    // Adding token to headers of a clone of the request
    request = request.clone({
      setHeaders: {
        Authorization: "Bearer " + token
      }
    })
    // Forwarding 'new' request
   return next.handle(request);
  }
}
