import { Component } from '@angular/core';
import { IProduct } from '../../intefaces/product';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: IProduct[] = [
    {
      "id": 899,
      "name": "Product_67",
      "price": 383.62,
      "code": 4557,
      "available": false,
      "starRating": 2.3
    },
    {
      "id": 396,
      "name": "Product_38",
      "price": 415.6,
      "code": 2820,
      "available": false,
      "starRating": 4.9
    },
    {
      "id": 633,
      "name": "Product_80",
      "price": 137.37,
      "code": 5563,
      "available": true,
      "starRating": 4.4
    },
    {
      "id": 331,
      "name": "Product_12",
      "price": 182.12,
      "code": 7564,
      "available": false,
      "starRating": 3.5
    },
    {
      "id": 65,
      "name": "Product_53",
      "price": 153.34,
      "code": 4370,
      "available": false,
      "starRating": 1.5
    },
    {
      "id": 665,
      "name": "Product_69",
      "price": 35.4,
      "code": 1713,
      "available": true,
      "starRating": 3.4
    },
    {
      "id": 336,
      "name": "Product_99",
      "price": 57.58,
      "code": 1615,
      "available": false,
      "starRating": 3.5
    },
    {
      "id": 896,
      "name": "Product_63",
      "price": 185.27,
      "code": 1945,
      "available": false,
      "starRating": 3.9
    },
    {
      "id": 450,
      "name": "Product_2",
      "price": 233.84,
      "code": 8564,
      "available": false,
      "starRating": 1.8
    },
    {
      "id": 168,
      "name": "Product_73",
      "price": 72.51,
      "code": 7349,
      "available": false,
      "starRating": 2.9
    }
  ]
}
