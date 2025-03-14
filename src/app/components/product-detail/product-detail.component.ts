import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() name!: string;
  @Output() demo = new EventEmitter();


  thongbao() {
    const id = 10
    this.demo.emit(id)
  }
}


/**
 * function ProductDetailComponent(props){
 *  return <div>Xin chào {props.name}</div>
 * }
 */
