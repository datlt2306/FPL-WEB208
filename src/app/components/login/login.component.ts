import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
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
    this.authService.login(this.form.value).subscribe(() => {
      alert(`User ${this.form.value.email} login successfully`);
      this.form.reset();
    })
  }
}
