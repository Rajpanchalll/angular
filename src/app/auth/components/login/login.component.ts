import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isLoginMode = signal(true); // Toggle between login/signup

  authForm: FormGroup;

  auth: Auth = inject(Auth);

  constructor(private fb: FormBuilder) {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  toggleMode() {
    this.isLoginMode.update((v) => !v);
  }
  
  onSubmit() {
    const { email, password } = this.authForm.value;

    if (this.isLoginMode()) {
      signInWithEmailAndPassword(this.auth, email, password)
        .then(userCredential => {
          console.log('Logged in:', userCredential.user);
        })
        .catch(error => {
          console.error('Login error:', error.message);
        });
    } else {
      createUserWithEmailAndPassword(this.auth, email, password)
        .then(userCredential => {
          console.log('Signed up:', userCredential.user);
        })
        .catch(error => {
          console.error('Signup error:', error.message);
        });
    }
  }

}
