import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { url } from 'inspector';

const AUTH = 'http://localhost:8080/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  AUTH_API: string = "http://localhost:8080";
  constructor(private http: HttpClient) {}

  connexion(username: string, password: string): Observable<any> {
    return this.http.post(
      this.AUTH_API + 'signin',
      {
        username,
        password,
      },
      httpOptions
    );
  }

  inscription(username: string, email: string, password: string): Observable<any> {
    return this.http.post(
      AUTH + 'signup',
      {
        username,
        email,
        password,
      },
      httpOptions
    );
  }


  login(utilisateur : User): Observable<User> {
    return this.http.post<User>(`${this.AUTH_API}/login`, utilisateur)
  }



  register(utilisateur : User) :Observable<User> {
    return this.http.post<User>(`${this.AUTH_API}/user/addusers`, utilisateur)
  }

  logout(): Observable<any> {
    return this.http.post(this.AUTH_API + 'signout', { }, httpOptions);
  }
}