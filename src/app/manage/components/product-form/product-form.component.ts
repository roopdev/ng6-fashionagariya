import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
	product: Product = {
		name: '',
		brand: '',
		description: '',
	}
	categories$: any;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { 
  	this.categories$ = productService.getAllCategories();
  }

  ngOnInit() {
  }

  saveProduct() {
  	console.log(this.product);
  	this.productService.createProduct(this.product);
    this.router.navigate(['/manage/product']);
  }

}
