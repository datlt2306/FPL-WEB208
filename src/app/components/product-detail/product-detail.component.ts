import { Component, Input } from '@angular/core';
import { IProduct } from '../../intefaces/product';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product!: IProduct
}
/**
 * function ProductDetail({product}){}
 */