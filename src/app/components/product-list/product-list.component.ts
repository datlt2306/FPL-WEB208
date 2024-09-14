import { Component } from '@angular/core';
import { IProduct } from '../../interfaces/product';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: IProduct[] = [
    {
      "id": 1,
      "name": "Smartphone Pro X",
      "code": "SPX-001",
      "available": true,
      "price": 999.99,
      "starRating": 4.8
    },
    {
      "id": 2,
      "name": "Wireless Headphones",
      "code": "WH-202",
      "available": false,
      "price": 199.99,
      "starRating": 4.5
    },
    {
      "id": 3,
      "name": "Gaming Laptop GT",
      "code": "GLGT-500",
      "available": true,
      "price": 1499.99,
      "starRating": 4.7
    },
    {
      "id": 4,
      "name": "4K Monitor Ultra",
      "code": "4KMU-120",
      "available": true,
      "price": 399.99,
      "starRating": 4.6
    },
    {
      "id": 5,
      "name": "Mechanical Keyboard",
      "code": "MK-340",
      "available": true,
      "price": 89.99,
      "starRating": 4.2
    },
    {
      "id": 6,
      "name": "Smartwatch Fit",
      "code": "SWF-111",
      "available": false,
      "price": 149.99,
      "starRating": 4.4
    },
    {
      "id": 7,
      "name": "Bluetooth Speaker",
      "code": "BTS-600",
      "available": true,
      "price": 59.99,
      "starRating": 4.3
    },
    {
      "id": 8,
      "name": "Portable SSD 1TB",
      "code": "PSSD-1T",
      "available": true,
      "price": 129.99,
      "starRating": 4.9
    },
    {
      "id": 9,
      "name": "Drone Max Air",
      "code": "DMA-900",
      "available": false,
      "price": 899.99,
      "starRating": 4.8
    },
    {
      "id": 10,
      "name": "Action Camera 4K",
      "code": "AC-4K-220",
      "available": true,
      "price": 299.99,
      "starRating": 4.5
    }
  ]
}
