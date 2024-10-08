import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signinForm!: any
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {

  }
  ngOnInit() {
    this.signinForm = this.formBuilder.group({
      username: [''],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  onHandleSignin() {
    if (this.signinForm.invalid) return;
    this.authService.signin(this.signinForm.value).subscribe(data => {
      alert(`Đăng nhập thành công`);
      localStorage.setItem('user', JSON.stringify(data));
    })
  }
}
