import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Star {
	userId: any;
	productId: any;
	value: number;
  createdAt: number;
}

@Injectable({
  providedIn: 'root'
})
export class StarService {

  constructor(private afs: AngularFirestore) { }

  // Star reviews that belong to a user
  getUserStars(userId) {
  	const starsRef = this.afs.collection('stars', ref => ref.where('userId', '==', userId));
  	return starsRef.valueChanges();
  }

  // Get all stars that belong to a Product
  getProductStars(productId) {
  	const starsRef = this.afs.collection('stars', ref => ref.where('productId', '==', productId));
  	return starsRef.valueChanges();
  }

  // Create or update star
  setStar(userId, productId, value) {
  	//Star document data
  	const star: Star = { userId, productId, value, createdAt: new Date().getTime() };

  	// Custom doc ID for relationship
  	const starPath = 'stars/${star.userId}_${star.productId}';

  	// Set the date, return the promise
  	return this.afs.doc(starPath).set(star);
  }

  // Remove the star
  removeStar(userId, productId, value) {
  	const starPath = 'stars/${star.userId}_${star.productId}';
  	return this.afs.doc(starPath).delete();
  }

}
