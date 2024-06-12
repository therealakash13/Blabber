import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  signupForm: FormGroup | any;
  loginForm: FormGroup | any;

  loginToggle: boolean = false;
  signupToggle: boolean = false;
  constructor(private router: Router, private fb: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    this.loginForm = this.fb.group({
      email: '',
      password: '',
    });
  }

  onsubmit(form: FormGroup) {
    console.log(form.value);
    form.reset();
  }

  toggleLoginModal() {
    this.loginToggle = !this.loginToggle;
  }
  toggleSignupModal() {
    this.signupToggle = !this.signupToggle;
  }
}
