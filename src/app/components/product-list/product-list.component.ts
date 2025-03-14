import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, NgIf, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  product!: any;
  products: any = [
    { id: 1, name: 'Iphone 12', price: 1000 }, // item
    { id: 2, name: 'Iphone 11', price: 900 },
    { id: 3, name: 'Iphone 10', price: 800 },
    { id: 4, name: 'Iphone 9', price: 700 },
  ]
  removeItem(id: number) {
    const confirm = window.confirm(`Bạn có chắc chắn muốn xóa không?`);
    if (!confirm) return;
    this.products = this.products.filter((product: any) => product.id !== id);
  }
  setProduct(item: any) {
    this.product = item;
  }
}