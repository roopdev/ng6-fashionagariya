import { Component, OnInit, Inject } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'edit-profile-name',
  templateUrl: './edit-profile-name.component.html',
  styleUrls: ['./edit-profile-name.component.scss']
})
export class EditProfileNameComponent implements OnInit {
	nameForm: FormGroup;

  constructor(private fb: FormBuilder,
  						private userService: UserService,
  						public dialogRef: MatDialogRef<EditProfileNameComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  	this.nameForm = this.fb.group({
  	  displayName: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)]]
  	})
  }

  editName() {
  	const formValue = this.nameForm.value;
  	this.userService.updateUserProfileName(formValue.displayName);
  	this.dialogRef.close("Name edited!!")
  }

  get displayName() { return this.nameForm.get('displayName'); }

}
