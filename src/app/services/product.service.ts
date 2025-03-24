import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/products`);
  }
  create(formData: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/products`, formData);
  }
  updateOne(formData: any, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/products/${id}`, formData);
  }
  getOne(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/products/${id}`);
  }
}
