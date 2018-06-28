import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { CartLine } from '../models/cartLine.model';

@Injectable({
  providedIn: 'root'
})
export class CartLineService {

	cartLineCollection: AngularFirestoreCollection<CartLine>;

  constructor(private afs: AngularFirestore) { 
  	this.cartLineCollection = afs.collection('cartLine');
  }

  createCartLine(cartLine: CartLine) {
  	return this.cartLineCollection.add(cartLine)
  							.then(doc => console.log(doc.id))
  							.catch(err => console.error(err));
  }

  updateCartLine(cartLine: CartLine, id: string) {
  	return this.cartLineCollection.doc(id).update(cartLine)
  							.then(doc => console.log(doc))
  							.catch(err => console.error(err));
  }

  deleteCartLine(id: string) {
  	return this.cartLineCollection.doc(id).delete();
  }

  getCartLineWithId(id: string) {
  	return this.cartLineCollection.doc(id).valueChanges();
  }

  listCartLineWithCartId(cartId: string) {
  	return this.afs.collection('cartLine', ref => ref.where('cartId', '==', cartId)).valueChanges();
  }

  listAvailableCartLine(cartId: string) {
  	return this.afs.collection('cartLine', ref => ref.where('isAvailable', '==', true)).valueChanges();
  }

  getByCartAndProduct(cartId: string, productId: string) {
  	return this.afs.collection('cartLine', ref => ref.where('product.id', '==', productId)).valueChanges();
  }
}
