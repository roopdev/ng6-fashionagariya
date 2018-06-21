import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { EcomModule } from './ecom/ecom.module';
import { BlogModule } from './blog/blog.module';
import { ManageModule } from './manage/manage.module';
import { MaterialModule } from './material/material.module';
import { HomeComponent } from './core/components/home/home.component';
import { DropZoneDirective } from './shared/directives/drop-zone.directive';

@NgModule({
  declarations: [
    AppComponent,
    DropZoneDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
    EcomModule,
    BlogModule,
    ManageModule,
    MaterialModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
        { path: '', component: HomeComponent}
      ], { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
