import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
	product$: Observable<Product[]>;

  constructor(private productService: ProductService) { 
  	this.product$ = this.productService.getAllProducts();
  }

  ngOnInit() {
  }

}
