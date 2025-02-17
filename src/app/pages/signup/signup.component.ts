import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  authForm!: any;
  constructor(
    private authService: AuthService,
    private Router: Router,
    private formBuilder: FormBuilder
  ) {
    this.authForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }
  onSubmit() {
    if (!this.authForm.valid) return;
    console.log('ahihi', this.authForm.value);
    this.authService.signup(this.authForm.value).subscribe(data => console.log(data))
  }
}
