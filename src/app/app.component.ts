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
// Bước 1: Tạo một component mới đặt tên là Counter
// Bước 2: tạo 2 button ( increment, decrement )
// Bước 3: Click vào button increment thì giá trị tăng lên 1
// Bước 4: Click vào button decrement thì giá trị giảm đi 1