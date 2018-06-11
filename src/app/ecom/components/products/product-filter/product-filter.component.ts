import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CategoryService } from '../../../../shared/services/category.service';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
	category$: Observable<Category[]>;

  constructor(private categoryService: CategoryService) { 

  }

  ngOnInit() {
  	this.category$ = this.categoryService.allCategories();
  	console.log(this.category$);
  }

}
