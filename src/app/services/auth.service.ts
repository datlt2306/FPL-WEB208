import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type User = {
  id?: number;
  email: string,
  password: string,
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_URL = "http://localhost:3000"
  http = inject(HttpClient);
  constructor() { }
  login(formData: User): Observable<User> {
    console.log('formData', formData);
    return this.http.post<User>(`${this.API_URL}/login`, formData);
  }
  register(formData: User): Observable<User> {
    return this.http.post<User>(`${this.API_URL}/register`, formData);
  }
  logout() {

  }
}
