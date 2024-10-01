import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './products-edit.component.html',
  styleUrl: './products-edit.component.css'
})
export class ProductsEditComponent {
  productForm!: any
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.params['id'];
    this.productService.getProductById(id).subscribe(data => {
      this.productForm.patchValue(data);
    })
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
  onHandleEdit() {

    const id = +this.route.snapshot.params['id'];
    if (this.productForm.invalid) return;
    this.productService.updateProduct({ ...this.productForm.value, id }).subscribe(data => {
      alert(`Cập nhật sản phẩm thành công`);
      this.router.navigateByUrl('/admin/products');
    })
  }
}
