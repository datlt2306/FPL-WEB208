import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  // @Input() students: any[] = []
  @Output() onRemove = new EventEmitter<number>();

  students!: any[];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe(data => {
      this.students = data;
    })
  }

  removeStudent(id: number) {
    this.onRemove.emit(id)
  }
  // inject service vào constructor
}



// ng g s ten_service
// class A vào class B => inject vào constructor