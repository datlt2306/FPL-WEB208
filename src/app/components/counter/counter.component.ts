import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  count: number = 0;
  increment() {
    this.count++;
  }
  decrement() {
    this.count--;
  }
  increase(value: number) {
    this.count += value;
  }
}
