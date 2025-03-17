import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getList() {
    return [
      { id: 1, name: 'Iphone 12', price: 1000 }, // item
      { id: 2, name: 'Iphone 11', price: 900 },
      { id: 3, name: 'Iphone 10', price: 800 },
      { id: 4, name: 'Iphone 9', price: 700 },
    ]
  }
  create() {

  }
  update() {

  }
}
