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
  id: string;

  constructor(private productService: ProductService,
              private router: Router,
              private route: ActivatedRoute) { 
    this.id = route.snapshot.paramMap.get('id');
    if(this.id) {
      productService.getSingleProduct(this.id).subscribe(doc => {
        this.product = doc;
      });
    }
  	this.categories$ = productService.getAllCategories();
  }

  ngOnInit() {
  }

  saveProduct() {
    if(this.id) {
      this.productService.updateProduct(this.product, this.id);
    } else {     
      this.productService.createProduct(this.product);
    }
    this.router.navigate(['/manage/product']);
  }

  deleteProd() {
    if(!confirm('Are you sure want to delete this product?')) return;

    this.productService.deleteProduct(this.id);
    this.router.navigate(['/manage/product']);
  }

}
