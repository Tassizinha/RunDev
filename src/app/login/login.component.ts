import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; //
import { RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.sass'
})
export class LoginComponent {

  constructor(private fb: FormBuilder) {
  }
  onRegister(): void {
    console.log('Navegar para a página de registro');
    // this.router.navigate(['/register']); 
  }

  // get username() {
  //   return this.loginForm.get('username');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }
}