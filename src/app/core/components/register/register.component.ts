import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Observable } from 'rxjs';

import { AddressService } from '../../../shared/services/address.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
	isLinear = false;
	firstFormGroup: FormGroup;
	secondFormGroup: FormGroup;
  states: Observable<any[]>;
  state: string;
  constructor(private _formBuilder: FormBuilder, private addressService: AddressService) { }

  ngOnInit() {
    this.states = this.addressService.getStates();

  	this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required],
      thirdCtrl: ['', Validators.required]
    })
  }

}
