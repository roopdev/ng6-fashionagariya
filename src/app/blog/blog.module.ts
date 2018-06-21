import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { BlogsComponent } from './components/blogs/blogs.component';
import { BlogSingleComponent } from './components/blogs/blog-single/blog-single.component';
import { BlogTopComponent } from './components/blogs/blog-top/blog-top.component';
import { InstagramComponent } from './components/blogs/instagram/instagram.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule.forChild([
    		{ path: 'blogs', component: BlogsComponent}
    	])
  ],
  declarations: [
  	BlogsComponent, 
  	BlogSingleComponent, 
  	BlogTopComponent, 
  	InstagramComponent
  ]
})
export class BlogModule { }
