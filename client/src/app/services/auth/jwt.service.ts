import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

const loginUrl = 'http://localhost:8080/auth/login';
const registerUrl = 'http://localhost:8080/auth/signup';

@Injectable({
  providedIn: 'root'
})
export class JwtService {

  headers = new HttpHeaders().set('Content-Type', 'application/json');
  currentUser = {};

  constructor(
    private httpClient: HttpClient,
    public router: Router,
  ) { }
  // User login handler
  login(email: string, password: string) {
    return this.httpClient.post<{token: string}>(loginUrl, {email, password})
    .subscribe((res: any) => {
      // Save JWT access token to the browser's storage
      localStorage.setItem('token', res.token);
      // Upon successful res, direct user to home page
      this.currentUser = res;
      this.router.navigate(['']);
    })
  }
  // New User register handler
  register(user: object): Observable<any> {
    return this.httpClient.post(registerUrl, user)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Token getter 
  getToken() {
    return localStorage.getItem('token');
  }
  // User logout handler
  logout() {
    // To delete, all what is needed is to delete the access token
    // that is already saved in the browser
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
  }
  // Property that verify if a user is logged in
  public get isLoggedIn(): boolean{
    return localStorage.getItem('token') !== null;
  }

  // Error handler 
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      msg = `ERROR <<code: ${error.status}>> ${error.message}`;
    }
    return throwError(msg);
  }
}
