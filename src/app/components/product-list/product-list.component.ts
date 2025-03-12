import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: any = [
    { id: 1, name: 'Iphone 12', price: 1000 },
    { id: 2, name: 'Iphone 11', price: 900 },
    { id: 3, name: 'Iphone 10', price: 800 },
    { id: 4, name: 'Iphone 9', price: 700 },
  ]
}