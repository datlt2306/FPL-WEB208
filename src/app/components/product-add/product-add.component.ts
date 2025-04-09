import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { NgClass, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, RouterLink, NgClass],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  form!: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      price: [0, Validators.required]
    })
  }

  onSubmit() {
    if (!this.form.valid) return;
    this.productService.create(this.form.value).subscribe(() => {
      alert(`Thêm sản phẩm thành công`);
      this.router.navigate(['/admin/products']);
    })
  }
}
