import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Adicione se você estiver usando Reactive Forms
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NgIf, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})

export class LoginComponent {

  loginForm: FormGroup; 
  errorMessage: string = '';
  title = 'Welcome Again!'
  description = 'Log in to follow and order your favorite food.'
  usernamePlaceHolder = 'Username'
  passwordPlaceHolder = 'Password'
  forgotPasswordText = 'Forgot password?'

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]], 
      password: ['', [Validators.required]],
    });
  }

  onRegister() {
  
    console.log('Redirecionando para a página de registro...');
  } 

  onLogin(): void {
    if (this.loginForm.valid) {
      const {username, password} = this.loginForm.value;

      if (username === 'usuario' && password === 'senha123'){
        console.log("successful login");
      } else  {
          this.errorMessage = 'Username or password is incorret';
      } 
    } else {
        this.errorMessage = 'Please fill in all required fields';
      }      
    }
  }



