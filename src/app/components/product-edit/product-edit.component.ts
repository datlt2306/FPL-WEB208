import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { NgClass, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor, NgIf, NgClass, RouterLink],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  form!: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(6)]],
      price: [0, Validators.required]
    })
  }

  ngOnInit() {
    const id = this.activeRoute.snapshot.params['id'];
    this.productService.getOne(id).subscribe((product: any) => {
      this.form.setValue(product)
    })
  }


  onSubmit() {
    if (!this.form.valid) return;
    const id = this.activeRoute.snapshot.params['id'];
    this.productService.updateOne(this.form.value, id).subscribe(() => {
      alert(`Cập nhật sản phẩm thành công`);
      this.router.navigate(['/admin/products']);
    })
  }
}
