import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserOrdersComponent } from './components/user-orders/user-orders.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
        { path: 'user/profile', component: UserProfileComponent},
        { path: 'user/orders', component: UserOrdersComponent},
    		{ path: 'user/settings', component: UserSettingsComponent}
    	])
  ],
  declarations: [
  	UserProfileComponent,
  	UserOrdersComponent,
  	UserSettingsComponent
  ]
})
export class MemberModule { }
