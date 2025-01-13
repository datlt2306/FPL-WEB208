import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  productForm!: any;

  constructor(
    // lấy id từ url
    private route: ActivatedRoute,
    // call api
    private productService: ProductService,
    // build form
    private formBuilder: FormBuilder,
    // chuyển hướng
    private router: Router
  ) {
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      price: [0, [Validators.required, Validators.min(0)]],
    })
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data => {
      // cập nhật giá trị form
      this.productForm.patchValue(data);
    })

  }

  onSubmit() {
    if (!this.productForm.valid) return;
    const id = this.route.snapshot.params['id'];

    this.productService.updateProduct({ id, ...this.productForm.value }).subscribe(() => {
      alert('Cập nhật sản phẩm thành công');
      this.router.navigateByUrl('/admin/products');
    })
  }
}
