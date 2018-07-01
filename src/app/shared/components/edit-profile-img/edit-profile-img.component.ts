import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-edit-profile-img',
  templateUrl: './edit-profile-img.component.html',
  styleUrls: ['./edit-profile-img.component.scss']
})
export class EditProfileImgComponent implements OnInit {

  constructor(private userService: UserService,
  						public dialogRef: MatDialogRef<EditProfileImgComponent>,
                  @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  editPhoto() {
  	this.userService.updateUserProfileImg();
  	this.dialogRef.close("Image edited!!")
  }

}
