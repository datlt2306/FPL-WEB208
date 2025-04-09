import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, ProductDetailComponent, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any;
  isLoading: boolean = true;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.loadProducts();
  }

  loadProducts() {
    this.isLoading = true;
    this.productService.getList().subscribe(data => {
      this.products = data;
      this.isLoading = false;
    });
  }

  removeItem(id: number) {
    const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
    if (!confirm) return;

    this.productService.deleteOne(id).subscribe(() => {
      this.products = this.products.filter((product: any) => product.id !== id);
      alert('Xóa sản phẩm thành công');
    });
  }

  navigateToEdit(id: number) {
    this.router.navigate(['/admin/products/edit', id]);
  }
}