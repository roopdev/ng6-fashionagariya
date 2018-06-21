import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { ProductComponent } from './components/product/product.component';
import { BlogComponent } from './components/blog/blog.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { BlogFormComponent } from './components/blog-form/blog-form.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
        { path: 'manage/category/new', component: CategoryFormComponent},
        { path: 'manage/product/new', component: ProductFormComponent},
    		{ path: 'manage/product', component: ProductComponent},
        { path: 'manage/blog/new', component: BlogFormComponent},
    		{ path: 'manage/blog', component: BlogComponent},
    	])
  ],
  declarations: [
  	ProductComponent, 
  	BlogComponent, 
    ProductFormComponent, 
    BlogFormComponent, 
    CategoryFormComponent
  ],
  exports: [
  ]
})
export class ManageModule { }
