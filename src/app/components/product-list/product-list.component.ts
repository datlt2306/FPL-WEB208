import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any;

  constructor(private productService: ProductService) {
    this.productService.getList().subscribe(data => {
      this.products = data;
    })
  }

  removeItem(id: number) {
    const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
    if (!confirm) return;
    this.products = this.products.filter((product: any) => product.id !== id);
  }
}