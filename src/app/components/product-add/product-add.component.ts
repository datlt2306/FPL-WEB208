import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-product-add',
  standalone: true,
  imports: [FormsModule],
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
    console.log(this.product)
  }
}
