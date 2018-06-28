import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AddressService } from '../../../shared/services/address.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Address } from '../../../shared/models/address.model';

@Component({
  selector: 'app-billing-address',
  templateUrl: './billing-address.component.html',
  styleUrls: ['./billing-address.component.scss']
})
export class BillingAddressComponent implements OnInit {
	addressForm: FormGroup;
	states;
  userId: string;
  constructor(private addressService: AddressService,
              private authService: AuthService,
  						private fb: FormBuilder) { 
    authService.user.subscribe(doc => {
      console.log(doc.uid);
      this.userId = doc.uid;
    });
  }

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
  	this.addressService.saveBillingAddress(formValue, this.userId).then(() => console.log('Address saved!!!')).catch(err => console.error(err));
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
