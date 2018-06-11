import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
	categoryCollection: AngularFirestoreCollection<Category>;

  constructor(private afs: AngularFirestore) { 
  	this.categoryCollection = afs.collection('category');
  }

  allCategories() {
  	return this.categoryCollection.valueChanges();
  }
}
