import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() name!: string;
}


/**
 * function ProductDetailComponent(props){
 *  return <div>Xin chào {props.name}</div>
 * }
 */
