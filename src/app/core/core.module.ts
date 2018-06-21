import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'reset-password', component: ResetPasswordComponent },
        { path: 'about', component: AboutComponent },
        { path: 'contact', component: ContactComponent }
      ])
  ],
  declarations: [
  	HomeComponent, 
  	HeaderComponent, 
  	FooterComponent, 
  	LoginComponent, 
  	RegisterComponent, 
  	AboutComponent, 
  	ContactComponent, 
  	ResetPasswordComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
