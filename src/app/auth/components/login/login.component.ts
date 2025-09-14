import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  logInForm!: FormGroup;
  signUpForm!: FormGroup;
  isLogInFormVisible: boolean = true;

  readonly fb = inject(FormBuilder);

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.buildLogInForm();
    this.buildSignUpForm();
  }

  buildLogInForm(): void {
    this.logInForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  buildSignUpForm(): void {
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  get toggleSignUpForm(): boolean {
    return this.isLogInFormVisible = !this.isLogInFormVisible;
  }
}
