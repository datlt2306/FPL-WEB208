import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './products-add.component.html',
  styleUrl: './products-add.component.css'
})
export class ProductsAddComponent {
  productForm!: any
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      type: ['type1'],
      published: [true],
      description: [''],
      category: ['']
    })
  }
  onHandleAdd() {
    if (this.productForm.invalid) return;
    this.productService.addProduct(this.productForm.value).subscribe(data => {
      alert(`Thêm sản phẩm thành công`);
      this.router.navigateByUrl('/admin/products');
    })
  }
}
