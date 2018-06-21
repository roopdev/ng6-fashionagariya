import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from '../../../../shared/services/product.service';
import { Category } from '../../../../shared/models/category.model';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.scss']
})
export class ProductFilterComponent implements OnInit {
	category$: Observable<Category[]>;

  constructor(private productService: ProductService) { 

  }

  ngOnInit() {
  	this.category$ = this.productService.getAllCategories();
  	console.log(this.category$);
  }

}
