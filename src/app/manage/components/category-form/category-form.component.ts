import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from '../../../shared/services/product.service';
import { Category } from '../../../shared/models/category.model';

@Component({
  selector: 'category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

	category: Category = {
    name: '',
    description: '',
  };
	categories$: any;
  constructor(private productService: ProductService) {
   }

  ngOnInit() {
  	this.categories$ = this.productService.getAllCategories();
  }

  saveCategory() {
  	console.log(this.category);
  	this.productService.createCategory(this.category);
  }

  updateCategory(category, id) {
  	this.productService.updateCategory(category, id);
  }

  deleteCategory(id) {
    if(!confirm('Are you sure want to delete this product?')) return;
  	this.productService.deleteCategory(id);
  }

}
