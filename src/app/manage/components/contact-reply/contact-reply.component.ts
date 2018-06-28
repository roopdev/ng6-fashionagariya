import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ContactService } from '../../../shared/services/contact.service';
import { Contact } from '../../../shared/models/contact.model';

@Component({
  selector: 'contact-reply',
  templateUrl: './contact-reply.component.html',
  styleUrls: ['./contact-reply.component.scss']
})
export class ContactReplyComponent implements OnInit {
	contact;
	contactId: string;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { 
  	this.contactId = this.route.snapshot.paramMap.get('id');
  	this.contact = contactService.getSingleContact(this.contactId);
  }

  ngOnInit() {
  }

}
