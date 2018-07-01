import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MaterialModule } from '../material/material.module';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { StarReviewComponent } from './components/star-review/star-review.component';
import { AddressFormComponent } from './components/address-form/address-form.component';
import { EditProfileImgComponent } from './components/edit-profile-img/edit-profile-img.component';
import { EditProfileNameComponent } from './components/edit-profile-name/edit-profile-name.component';

import { AuthService } from './services/auth.service';
import { ProductService } from './services/product.service';
import { StarService } from './services/star.service';
import { CartLineService } from './services/cart-line.service';
import { UserService } from './services/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgbModule.forRoot()
  ],
  declarations: [
    LoadingSpinnerComponent,
    StarReviewComponent,
    AddressFormComponent,
    EditProfileImgComponent,
    EditProfileNameComponent,
  ],
  entryComponents: [
      AddressFormComponent,
      EditProfileImgComponent,
      EditProfileNameComponent
    ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  	AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  	NgbModule.forRoot().ngModule,
    StarReviewComponent,
    AddressFormComponent,
    EditProfileImgComponent
  ],
  providers: [
    AuthService,
    ProductService,
    StarService,
    UserService,
    CartLineService
  ]
})
export class SharedModule { }
