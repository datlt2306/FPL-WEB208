import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form!: any;
  authService = inject(AuthService);
  formBuilder = inject(FormBuilder);
  constructor() {
    this.form = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }
  onSubmit() {
    console.log(this.form.value);
    this.authService.register(this.form.value).subscribe(() => {
      alert(`User ${this.form.value.email} registered successfully`);
      this.form.reset();
    })
  }
}
