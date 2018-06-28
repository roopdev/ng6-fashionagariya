import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

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

  getAllContacts() {
    return this.contactCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as Contact;
          const id = a.payload.doc.id;

          return { id, ...data };
        }))
      );
  }

  deleteContact(id) {
    return this.contactCollection.doc(id).delete().catch(err => console.error(err));
  }

  getSingleContact(id) {
    return this.contactCollection.doc(id).snapshotChanges().pipe(
       map(a => {
          const data = a.payload.data() as Contact;
          const id = a.payload.id;
          return {id, ...data};
        })
      );
  }


}
