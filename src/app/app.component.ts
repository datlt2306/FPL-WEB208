import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ProductListComponent, ProductAddComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})// metadata
export class AppComponent {
  title = 'Angular';
}
// root component