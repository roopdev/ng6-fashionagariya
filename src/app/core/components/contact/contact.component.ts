import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material';

import { ContactService } from '../../../shared/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	contactForm: FormGroup;

  constructor(private contactService: ContactService,
  						private fb: FormBuilder,
  						private snackBar: MatSnackBar) { }

  ngOnInit() {
  	this.contactForm = this.fb.group({
  		name: ['', [Validators.required]],
  		email: ['', [Validators.required, Validators.email]],
  		mobile: [null, [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
  		message: ['', [Validators.required]]
  	});
  }

  sendMessage() {
  	const formValue = this.contactForm.value;
  	console.log(formValue);
  	this.contactService.saveContact(formValue).then(() => {
  		this.snackBar.open('Message send', 'Thank You!', {
  		  duration: 3000
  		});
  	})
  }

  get name() {
  	return this.contactForm.get('name');
  }

  get email() {
  	return this.contactForm.get('email');
  }

  get mobile() {
  	return this.contactForm.get('mobile');
  }

  get message() {
  	return this.contactForm.get('message');
  }

}
