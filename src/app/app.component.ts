import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  person = {
    fullName: "Lê Trọng Đạt",
    age: 36,
    address: "Hà Nội",
    isMarried: false,
    picture: 'https://picsum.photos/200/300'
  }
  handleClick() {
    // console.log(1)
    this.person.isMarried = !this.person.isMarried
  }
}
/**
 * Tạo component: ng g c ten_component --skipTests=true
 * Gọi component:
 */
// Component: 
// Logic (controller) .ts
// View : .html
// stylesheet: .css
// spec: .spec.ts
// App sẽ to nhất 
// Đã import Component vào  file logic chưa??
// Đã gọi Component vào file view chưa??
/**
 * Tạo component: ng g c ProductList --skipTests=true
 * Tạo services: ng g s services/product
 *     - Services để call api
 *     - Sử dụng service httpClient
 *     - import module vào file app.config.ts => provideHttpClient()
 *     - Observable: return this.http.get<any[]>(`http://localhost:3000/products`);
 * Truy cập lại file .ts của component
 *    - inject service vào file .ts của component: constructor(private productService: ProductService) { }
 *   - Gọi service trong file .ts của component: this.productService.getList().subscribe(data => {})
 *    - set vào trong thuộc tính để binding dữ liệu ra ngoài view
 *  
 * 
 * Thêm sản phẩm mới:
 * Truy cập services products
 * viết hàm create(formData) trong file .ts của services
 * - Observable: return this.http.post<any[]>(`http://localhost:3000/products`,formData);
 * Truy cập lại file .ts của component
 * View -> submit -> vào phương thức -> call services
 */