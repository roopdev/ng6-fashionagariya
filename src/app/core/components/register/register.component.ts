import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

import { AuthService } from '../../../shared/services/auth.service';
import { User } from '../../../shared/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  hide = true;
  user: User;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
   this.registerForm = this.fb.group({
     email: ['', [Validators.required, Validators.email]],
     password: ['', [
                     Validators.required, 
                     Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'),
                     Validators.minLength(6), 
                     Validators.maxLength(25)
                     ]
     ],
     displayName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]]
   })
  }

  register() {
    const formValue = this.registerForm.value;
    console.log(formValue);
    this.authService.emailSignUp(formValue);
  }

  get email() { return this.registerForm.get('email'); }
  get password() { return this.registerForm.get('password'); }
  get displayName() { return this.registerForm.get('displayName'); }

}
