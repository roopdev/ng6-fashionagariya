import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { switchMap, map } from 'rxjs/operators';

import { Address } from '../models/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private afs: AngularFirestore, private router: Router) { 
  }

  getStates() {
  	return this.afs.collection('states', ref => ref.orderBy('name')).valueChanges();
  }

  saveBillingAddress(address: Address, id: string) {
  	address.billing = true;
  	address.shipping = false;
    address.createdAt = new Date();
    address.userId = id;
  	return this.afs.collection('address').add(address)
                      .then(doc => {
                        console.log(doc.id)
                        this.router.navigate(['/']);
                      })
                      .catch(err => console.error(err));
  }

  saveShippingAddress(address: Address, id: string) {
  	address.shipping = true;
  	address.billing = false;
    address.createdAt = new Date();
    address.userId = id;
  	return this.afs.collection('address').add(address).then(doc => console.log(doc.id)).catch(err => console.error(err));  	
  }

  getUserBillingAddress(userId: string) {
  	return this.afs.collection('address', ref => ref.where('userId', '==', userId).where('billing', '==', true)).valueChanges();
  }

  getUserAllShippingAddress(userId: string) {
  	return this.afs.collection('address', ref => ref.where('userId', '==', userId).where('shipping', '==', true)).valueChanges(); 	
  }

  getUserSingleShippingAddress(docId: string) {
  	return this.afs.collection('address').doc(docId).valueChanges();
  }
}
