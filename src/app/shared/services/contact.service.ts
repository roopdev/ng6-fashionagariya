import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

	contactCollection: AngularFirestoreCollection<Contact>;

  constructor(private afs: AngularFirestore) { 
  	this.contactCollection = afs.collection('contacts');
  }

  saveContact(contact) {
  	return this.contactCollection.add(contact)
  								.then(doc => console.log(doc.id))
  								.catch(err => console.error(err));
  }


}
