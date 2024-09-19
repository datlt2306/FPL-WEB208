import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../interfaces/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product!: IProduct;
  @Output() onHandleAdd = new EventEmitter<number>();
  onHandleAddToCart(id: number) {
    console.log('id in child component', id);
    this.onHandleAdd.emit(id);
  }
}

/**
 * // Parent.jsx
 * function onHandle(id){
 * console.log(id)}
 * 
 * <Child props={data} onRemove={onHandle}/>
 */