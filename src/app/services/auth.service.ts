import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(formData: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/signup`, formData)
  }
}
