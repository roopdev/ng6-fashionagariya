import { Component, OnInit } from '@angular/core';

import { AuthService } from '../../../shared/services/auth.service';
import { AddressService } from '../../../shared/services/address.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
	billingAddress;
	user;
  constructor(private authService: AuthService, private addressService: AddressService) { 
    
  }

  ngOnInit() {
      this.authService.user.subscribe(doc => {
        console.log(doc.uid);
        this.user = doc;
        this.billingAddress = this.addressService.getUserBillingAddress(doc.uid);
      });
  }
  

}
