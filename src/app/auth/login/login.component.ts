import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; //
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})

export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: [
        '', 
        [
          Validators.required, 
          Validators.email
        ]
      ], 
      password: [
        '', 
        [
          Validators.required, 
          Validators.minLength(8)
        ]
      ]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      console.log('Formulário enviado com sucesso!', this.loginForm.value);
    } else {
      console.log('O formulário contém erros.');
      this.loginForm.markAllAsTouched();
    }
  }

  get username() {
    return this.loginForm.get('username');
  }

  get password() {
    return this.loginForm.get('password');
  }
}