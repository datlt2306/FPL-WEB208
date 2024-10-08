import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: any
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      username: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  onHandleSignup() {
    if (this.signupForm.invalid) return;
    this.authService.signup(this.signupForm.value).subscribe(data => {
      alert(`Đăng ký thành công`);
    })
  }
}
