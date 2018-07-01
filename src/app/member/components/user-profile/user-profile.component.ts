import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { AuthService } from '../../../shared/services/auth.service';
import { AddressService } from '../../../shared/services/address.service';

import { AddressFormComponent } from '../../../shared/components/address-form/address-form.component';
import { EditProfileImgComponent } from '../../../shared/components/edit-profile-img/edit-profile-img.component';
import { EditProfileNameComponent } from '../../../shared/components/edit-profile-name/edit-profile-name.component';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
	billingAddress;
  shippingAddress;
	user;
  constructor(private authService: AuthService, 
              private addressService: AddressService,
              public dialog: MatDialog) { 
    
  }

  ngOnInit() {
      this.authService.user.subscribe(doc => {
        console.log(doc);
        this.user = doc;
        this.billingAddress = this.addressService.getUserBillingAddress(doc.uid);
        this.shippingAddress = this.addressService.getUserAllShippingAddress(doc.uid);
      });
  }

  openDialog(): void {
      const dialogRef = this.dialog.open(AddressFormComponent);

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        console.log(result);
      });
    }

  openEditImgDialog(): void {
    const dialogEditRef = this.dialog.open(EditProfileImgComponent);

    dialogEditRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }

  openEditNameDialog(): void {
    const dialogNameRef = this.dialog.open(EditProfileNameComponent);

    dialogNameRef.afterClosed().subscribe(result => {
      console.log(result);
    })
  }
  

}
