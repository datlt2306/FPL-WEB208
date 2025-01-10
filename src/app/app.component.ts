import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular';
  student = {
    name: 'John Doe',
    age: 25,
    code: 'PH123456'
  }

  students = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
  ]
  // directive => thuộc tính mở rộng ra của HTML chỉ trong angular
  changeName() {
    this.student.name = "Đạt";
  }
  onHandleRemove(id: number) {
    this.students = this.students.filter(student => student.id !== id);
  }
}


// ng g c ten_component
// import ở trong file component.ts cha
// sử dụng : <app-ten_component></app-ten_component> ở trong file html cha



// const arrayName = ['A', 'B', 'C'];
// for (let name of arrayName) {
//   console.log(name);
// }