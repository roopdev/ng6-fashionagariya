import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

import { ProductService } from '../../../shared/services/product.service';
import { Product } from '../../../shared/models/product.model';


@Component({
  selector: 'manage-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product$: Observable<Product[]>;
  products: Product[] = [];
  displayedColumns = ['id', 'name', 'brand', 'category', 'isActive', 'quantity', 'unitPrice', 'purchases', 'views', 'edit'];
  dataSource: MatTableDataSource<Product>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(private productService: ProductService) { 
    this.product$ = this.productService.getAllProducts();
  }

  ngOnInit() {

    this.productService.getAllProducts().subscribe(doc => {
      this.dataSource = new MatTableDataSource(doc);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  deleteProduct(id) {
    if(!confirm('Are you sure want to delete this product?')) return;
    this.productService.deleteProduct(id);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase
    this.dataSource.filter = filterValue;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }




}
