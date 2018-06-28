import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AddressService } from '../../services/address.service';
import { AuthService } from '../../services/auth.service';
import { Address } from '../../models/address.model';

@Component({
  selector: 'address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
	addressForm: FormGroup;
	states;
  constructor(private addressService: AddressService,
  						private fb: FormBuilder) { }

  ngOnInit() {
  	this.states = this.addressService.getStates();
  	this.addressForm = this.fb.group({
  		firstName: ['', [Validators.required]],
  		lastName: ['', [Validators.required]],
  		addressLine1: ['', [Validators.required]],
  		addressLine2: ['', [Validators.required]],
  		city: ['', [Validators.required]],
      state: ['', [Validators.required]],
  		country: ['', [Validators.required]],
      postalCode: [null, [Validators.required, Validators.maxLength(8)]],
  		phone: [null, [Validators.required,Validators.minLength(10), Validators.maxLength(10)]],
  	});
  }

  saveAddress() {
  	const formValue = this.addressForm.value;
  	console.log(formValue);
  	this.addressService.saveShippingAddress(formValue).then(() => console.log('Address saved!!!')).catch(err => console.error(err));
  }

  get firstName() { return this.addressForm.get('firstName'); }
  get lastName() { return this.addressForm.get('lastName'); }
  get addressLine1() { return this.addressForm.get('addressLine1'); }
  get addressLine2() { return this.addressForm.get('addressLine2'); }
  get city() { return this.addressForm.get('city'); }
  get state() { return this.addressForm.get('state'); }
  get country() { return this.addressForm.get('country'); }
  get postalCode() { return this.addressForm.get('postalCode'); }
  get phone() { return this.addressForm.get('phone'); }

}
