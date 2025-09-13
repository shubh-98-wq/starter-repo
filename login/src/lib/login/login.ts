import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Auth } from './auth';


interface loginInfo {
  username: string;
  Password: string;
}
@Component({
  selector: 'lib-login',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginForm!: FormGroup;

  private readonly loginService = inject(Auth);
  private route = inject(Router);

  constructor() {
    this.initForm();
  }

  get f() {
    return this.loginForm.controls;
  }


  initForm() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    });
  }


  authorizedUser() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.loginService.login(this.loginForm.value).subscribe((res) => {
        if (res) {
          this.loginService.isloggedIn = true;
          this.route.navigate(['/dashboard/product']);//navigating to dashboard after login
        }
      });
    } else {
      this.loginForm.markAllAsTouched();
    }

  }
}
