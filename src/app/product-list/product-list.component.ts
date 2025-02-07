import { CurrencyPipe, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, CurrencyPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // @Input() students: any[] = []
  // @Output() onRemove = new EventEmitter<number>();

  products!: any[];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.products = data;
    })
  }

  removeProduct(id: number) {
    if (window.confirm('Bạn có chắc chắn muốn xóa không?')) {
      this.productService.removeProduct(id).subscribe(() => {
        alert('Xóa thành công');
        this.products = this.products.filter(product => product.id !== id);
      })
    }
  }
}

