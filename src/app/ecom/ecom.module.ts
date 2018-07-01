import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { ProductsComponent } from './components/products/products.component';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ProductSingleComponent } from './components/products/product-single/product-single.component';
import { BillingAddressComponent } from './components/billing-address/billing-address.component';
import { SCartComponent } from './components/s-cart/s-cart.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
        { path: 'products', component: ProductsComponent},
        { path: 'p/:id/:code', component: ProductSingleComponent},
        { path: 'billing-address', component: BillingAddressComponent},
    		{ path: 'user/cart', component: SCartComponent},

    	])
  ],
  declarations: [
  	ProductsComponent, 
  	ProductFilterComponent, 
  	ProductSingleComponent, 
    BillingAddressComponent, SCartComponent
  ]
})
export class EcomModule { }
