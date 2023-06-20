import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { Login } from '../models/Login';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { LoginResponse } from '../models/LoginResponse';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private readonly API = 'http://localhost:8080/api/auth';

  constructor(private httpClient: HttpClient,
              private router: Router) { }

  signIn(record: Login) {
    return this.httpClient.post<LoginResponse>(`${this.API}/signin`, record).pipe(
      catchError((error) => {
        return throwError(error);
      })
    );
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUserService() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }
}