import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API: string = `http://localhost:3000/products`;
  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.API)
  }
  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API}/${id}`)
  }
  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/${id}`)
  }
  updateProduct(product: IProduct): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.API}/${product.id}`, product);
  }
  addProduct(product: IProduct): Observable<IProduct> {
    return this.http.post<IProduct>(this.API, product)
  }
}
