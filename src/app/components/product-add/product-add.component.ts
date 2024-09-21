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
  }
  onHandleAdd() {
    console.log(this.product)
  }
}
