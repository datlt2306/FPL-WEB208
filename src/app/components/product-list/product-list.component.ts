import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, FormsModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  selectedProduct!: IProduct;
  products: IProduct[] = [
    {
      "id": 1,
      "name": "Smartphone Pro X",
      "code": "SPX-001",
      "available": true,
      "price": 999.99,
      "starRating": 4.8,
      "imageUrl": "https://picsum.photos/id/1/200/300"
    },
    {
      "id": 2,
      "name": "Wireless Headphones",
      "code": "WH-202",
      "available": false,
      "price": 199.99,
      "starRating": 4.5,
      "imageUrl": "https://picsum.photos/id/2/200/300"
    },
    {
      "id": 3,
      "name": "Gaming Laptop GT",
      "code": "GLGT-500",
      "available": true,
      "price": 1499.99,
      "starRating": 4.7,
      "imageUrl": "https://picsum.photos/id/3/200/300"
    },
    {
      "id": 4,
      "name": "4K Monitor Ultra",
      "code": "4KMU-120",
      "available": true,
      "price": 399.99,
      "starRating": 4.6,
      "imageUrl": "https://picsum.photos/id/4/200/300"
    },
    {
      "id": 5,
      "name": "Mechanical Keyboard",
      "code": "MK-340",
      "available": true,
      "price": 89.99,
      "starRating": 4.2,
      "imageUrl": "https://picsum.photos/id/5/200/300"
    },
    {
      "id": 6,
      "name": "Smartwatch Fit",
      "code": "SWF-111",
      "available": false,
      "price": 149.99,
      "starRating": 4.4,
      "imageUrl": "https://picsum.photos/id/6/200/300"
    },
    {
      "id": 7,
      "name": "Bluetooth Speaker",
      "code": "BTS-600",
      "available": true,
      "price": 59.99,
      "starRating": 4.3,
      "imageUrl": "https://picsum.photos/id/7/200/300"
    },
    {
      "id": 8,
      "name": "Portable SSD 1TB",
      "code": "PSSD-1T",
      "available": true,
      "price": 129.99,
      "starRating": 4.9,
      "imageUrl": "https://picsum.photos/id/8/200/300"
    },
    {
      "id": 9,
      "name": "Drone Max Air",
      "code": "DMA-900",
      "available": false,
      "price": 899.99,
      "starRating": 4.8,
      "imageUrl": "https://picsum.photos/id/9/200/300"
    },
    {
      "id": 10,
      "name": "Action Camera 4K",
      "code": "AC-4K-220",
      "available": true,
      "price": 299.99,
      "starRating": 4.5,
      "imageUrl": "https://picsum.photos/id/10/200/300"
    }
  ]
  onRemove(id: number) {
    const confirm = window.confirm(`Are you sure you want to remove product with id ${id}?`);
    if (confirm) {
      this.products = this.products.filter(product => product.id !== id);
    }
  }
  setProduct(product: IProduct) {
    this.selectedProduct = product;
  }
}
