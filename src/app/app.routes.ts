import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
   { path: '', redirectTo: '/login', pathMatch: 'full' }, 
   { path: 'login', component: LoginComponent },
   { path: 'home', component: HomeComponent },
   { path: '**', redirectTo: '/login' } 
 ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

 export class AppRoutingModule { }