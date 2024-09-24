import { Injectable } from '@angular/core';
import { IProduct } from '../interfaces/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(`http://localhost:3000/products`);
  }
  getProduct(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:3000/products/${id}`);
  }
  addProduct(product: IProduct) {
    return this.http.post<IProduct>(`http://localhost:3000/products`, product)
  }
  removeProduct(id: number) {
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`);
  }
  updateProduct(product: IProduct) {
    return this.http.put<IProduct>(`http://localhost:3000/products/${product.id}`, product);
  }
}



// ng g s services/product