import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const AUTH_API = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }


 

tryLogin() {
  this.http.post(AUTH_API + 'token', "userName=" + encodeURIComponent +
      "&password=" + encodeURIComponent +
      "&grant_type=password",
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
  ).subscribe(res => this
      .Success(res),
      res => this.Error(res));
}
  Error(res: any): void {
    throw new Error('Method not implemented.');
  }
  Success(res: Object): void {
    throw new Error('Method not implemented.');
  }




  register(user): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
