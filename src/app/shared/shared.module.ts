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

import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { UploadService } from './services/upload.service';
import { StarService } from './services/star.service';
import { StarReviewComponent } from './components/star-review/star-review.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    NgbModule.forRoot()
  ],
  declarations: [
    LoadingSpinnerComponent,
    StarReviewComponent
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  	AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
  	NgbModule.forRoot().ngModule,
    StarReviewComponent
  ],
  providers: [
    AuthService,
    CategoryService,
    ProductService,
    UploadService,
    StarService
  ]
})
export class SharedModule { }
