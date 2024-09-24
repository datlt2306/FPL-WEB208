import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  constructor(private productService: ProductService) {

  }
  onHandleAdd(form: NgForm) {
    if (form.invalid) return;
    this.productService.addProduct(form.value).subscribe(product => {
      console.log(product);
    })
  }
}
