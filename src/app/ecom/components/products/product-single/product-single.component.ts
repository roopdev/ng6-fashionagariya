import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { ProductService } from '../../../../shared/services/product.service';
import { Product } from '../../../../shared/models/product.model';

@Component({
  selector: 'app-product-single',
  templateUrl: './product-single.component.html',
  styleUrls: ['./product-single.component.scss']
})
export class ProductSingleComponent implements OnInit {

	product: Observable<Product>;
	productId: string;
  constructor(private productService: ProductService,
  						private route: ActivatedRoute) {
  }

  ngOnInit() {
  	this.productId = this.route.snapshot.paramMap.get('id');
  	this.product = this.productService.getSingleProduct(this.productId);
  }

}
