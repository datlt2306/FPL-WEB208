import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductItemComponent } from '../product-item/product-item.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, FormsModule, ProductDetailComponent, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct!: IProduct;
  myName!: string;
  products!: IProduct[]
  constructor(private productService: ProductService) {
    console.log('constructor')
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(products => {
      this.products = products
    })
  }

  onRemove(id: number) {
    const confirm = window.confirm(`Are you sure you want to remove product with id ${id}?`);
    if (confirm) {
      this.products = this.products.filter(product => product.id !== id);
    }
  }
  setProduct(product: IProduct) {
    this.selectedProduct = product;
  }
  handleAdd(id: number) {
    console.log(id);
  }
}

// ng g s services/product

// Component Product <- ProductService <- HttpClientService