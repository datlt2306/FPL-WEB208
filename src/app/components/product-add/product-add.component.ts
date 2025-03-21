import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
  form!: any;

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService) {
    this.form = this.formBuilder.group({
      name: [''],
      price: [0]
    })
  }

  onSubmit() {
    // if (!this.form.valid) return;
    this.productService.create(this.form.value).subscribe(() => {
      alert(`Thêm sản phẩm thành công`);
    })
  }
}
