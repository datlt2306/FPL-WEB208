import { Component } from '@angular/core';
import { SliderComponent } from '../../components/slider/slider.component';
import { LatestProductsComponent } from '../../components/latest-products/latest-products.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent, LatestProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
