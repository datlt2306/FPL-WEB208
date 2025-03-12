import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
// function AppComponent(){
//   const title
//   const person = {}
//   const handleSubmit = () => {

//   }
// }