import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductsComponent } from './components/products/products.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductSingleComponent } from './components/products/product-single/product-single.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
    		{ path: 'products', component: ProductsComponent}

    	])
  ],
  declarations: [
  	ProductsComponent, 
  	ProductFilterComponent, 
  	ProductSingleComponent
  ]
})
export class EcomModule { }
