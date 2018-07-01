import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Observable } from 'rxjs';

import { ContactService } from '../../../shared/services/contact.service';
import { Contact } from '../../../shared/models/contact.model';


@Component({
  selector: 'manage-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
	contact$: Observable<Contact[]>;
	contacts: Contact[] = [];
	displayedColumns = ['id', 'name', 'email', 'mobile', 'edit'];
	dataSource: MatTableDataSource<Contact>;

	@ViewChild(MatPaginator) paginator: MatPaginator;
	@ViewChild(MatSort) sort: MatSort;

  constructor(private contactService: ContactService) { 
  	this.contact$ = contactService.getAllContacts();
  }

  ngOnInit() {
  	this.contactService.getAllContacts().subscribe(doc => {
  	  this.dataSource = new MatTableDataSource(doc);
  	  this.dataSource.paginator = this.paginator;
  	  this.dataSource.sort = this.sort;
  	});
  }

  deleteContact(id) {
    if(!confirm('Are you sure want to delete this product?')) return;
    this.contactService.deleteContact(id);
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
