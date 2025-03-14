import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  person = {
    fullName: "Lê Trọng Đạt",
    age: 36,
    address: "Hà Nội",
    isMarried: false,
    picture: 'https://picsum.photos/200/300'
  }
  handleClick() {
    // console.log(1)
    this.person.isMarried = !this.person.isMarried
  }
}
/**
 * Tạo component: ng g c ten_component --skipTests=true
 * Gọi component: 
 */