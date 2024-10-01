import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { IProduct } from '../../interfaces/product';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-products-page',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './admin-products-page.component.html',
  styleUrl: './admin-products-page.component.css'
})
export class AdminProductsPageComponent {
  products!: IProduct[]
  constructor(private productService: ProductService) {

  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(data => this.products = data)

  }
  onRemoveItem(id: number) {
    const confirm = window.confirm('Are you sure you want to delete this product?');
    if (confirm) {
      this.productService.deleteProduct(id).subscribe(() => {
        alert(`Xóa sản phẩm thành công`);
        this.products = this.products.filter(product => product.id !== id);
      })
    }
  }
}
