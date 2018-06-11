import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';

import { AuthService } from './services/auth.service';
import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { UploadService } from './services/upload.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    NgbModule.forRoot()
  ],
  declarations: [
    LoadingSpinnerComponent
  ],
  exports: [
  	AngularFireAuthModule,
    AngularFirestoreModule,
  	NgbModule.forRoot().ngModule
  ],
  providers: [
    AuthService,
    CategoryService,
    ProductService,
    UploadService
  ]
})
export class SharedModule { }
