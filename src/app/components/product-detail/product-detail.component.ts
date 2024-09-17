import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../intefaces/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product!: IProduct;
  @Output() onHandleAddToCart = new EventEmitter<number>();

  addToCart(id: number) {
    console.log(`Product ${id} added to cart`);
    // muốn gửi id từ component lên cha
    this.onHandleAddToCart.emit(id);
  }
}
/**
 * function ProductDetail({product}){}
 */