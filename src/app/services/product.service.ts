import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API_URL: string = `http://localhost:3000/products`
  constructor(private http: HttpClient) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }
  getProduct(id: number): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }
  addProduct(product: any): Observable<any> {
    return this.http.post<any>(this.API_URL, product);
  }
  updateProduct(product: any): Observable<any> {
    return this.http.put<any>(`${this.API_URL}/${product.id}`, product);
  }
}



// Lấy id trên url -> call api -> hiển thị thông tin sản phẩm vào form
// Thay đổi giá trị form -> submit -> call api -> thông báo thành công