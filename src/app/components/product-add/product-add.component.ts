import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  product = {
    name: "",
    price: 0,
    available: false,
    type: "Loại 1",
    category: "Danh mục 2",
  }
  onHandleAdd() {
    if (!this.isFormValid()) return;
    console.log(this.product)

  }
  isFormValid() {
    return this.product.name && this.product.name.length > 10 && this.product.price > 0;
  }
}
