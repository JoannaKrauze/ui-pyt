import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRequest, SignUpRequest, User } from "../../models";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  signUp(signUp: SignUpRequest): Observable<User> {
    return this.http.post<User>("user/signUp", signUp)
  }

  login(login: LoginRequest): Observable<User> {
    return this.http.post<User>("user/login", login)
  }

  logout(): Observable<Boolean> {
    return this.http.post<Boolean>("user/logout", null)
  }

}
