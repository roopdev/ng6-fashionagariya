import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private afs: AngularFirestore) { }

  getStates() {
  	return this.afs.collection('states', ref => ref.orderBy('name')).valueChanges();
  }
}
