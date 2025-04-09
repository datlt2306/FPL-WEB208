import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL = "http://localhost:3000/"
  constructor(private http: HttpClient) { }

  getList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/products`);
  }
  create(formData: any): Observable<any> {
    return this.http.post<any>(`${this.API_URL}/products`, formData);
  }
  updateOne(formData: any, id: number): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/products/${id}`, formData);
  }
  getOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/products/${id}`);
  }
  deleteOne(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API_URL}/products/${id}`);
  }
}
