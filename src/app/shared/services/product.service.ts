import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase/app';

import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  categoryCollection: AngularFirestoreCollection<Category>;
	productCollection: AngularFirestoreCollection<Product>;
  categoryFolder;
  productFolder;

  constructor(private afs: AngularFirestore) { 
  	this.categoryCollection = afs.collection('categories');
    this.productCollection = afs.collection('products');
    this.categoryFolder = 'categoryImgs';
    this.productFolder = 'productImgs';
  }

  createCategory(category: Category) {
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      let path = `/${this.categoryFolder}/${selectedFile.name}`;
      var metadata = { contentType: 'image/jpeg', app: 'Fashionagariya web!'};
      var uploadTask = storageRef.child(path).put(selectedFile, metadata);

      uploadTask.on('state_changed', 
        () => {
          // Upload completed successfully, now we can get the download URL
          console.log('Image uploaded!!');
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            category.imgUrl = downloadURL;
            category.isActive = true;
            console.log('File available at: ', category.imgUrl);
            // Save category in firestore
            return this.categoryCollection.add(category)
                          .then(doc => console.log(doc.id))
                          .catch(err => console.error(err));
          }).catch(err => console.error(err));
        },
        (error) => {
          console.log(error);
      });
    }
  }

  updateCategory(category: Category, docId: string) {
  	return this.categoryCollection.doc(docId).update(category).catch(err => console.error(err));
  }

  deleteCategory(docId: string) {
  	return this.categoryCollection.doc(docId).delete().catch(err => console.error(err));
  }

  getAllCategories() {
  	return this.categoryCollection.snapshotChanges().pipe(
  		map(actions => actions.map(a => {
  			const data = a.payload.doc.data() as Category;
  			const id = a.payload.doc.id;
  			return { id, ...data};
  		}))
  	);
  }

  // ----------- CRUD for products ---------------

  createProduct(product: Product) {
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      let path = `/${this.productFolder}/${selectedFile.name}`;
      var metadata = { contentType: 'image/jpeg', app: 'Fashionagariya web!'};
      var uploadTask = storageRef.child(path).put(selectedFile, metadata);

      uploadTask.on('state_changed', 
        () => {
          // Upload completed successfully, now we can get the download URL
          console.log('Image uploaded!!');
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            product.imgUrl1 = downloadURL;
            product.isActive = true;
            product.code = 'FNPRD' + Math.floor(new Date().valueOf() * Math.random());
            product.purchases = 0;
            product.views = 0;
            console.log('File available at: ', product.imgUrl1);
            // Save category in firestore
            this.productCollection.add(product)
                        .then(doc => console.log(doc.id))
                        .catch(err => console.error(err));
          }).catch(err => console.error(err));
        },
        (error) => {
          console.log(error);
      });
    }    
  }

  updateProduct(product: Product, docId: string) {
    return this.productCollection.doc(docId).update(product).catch(err => console.error(err));
  }

  deleteProduct(docId: string) {
    return this.productCollection.doc(docId).delete().catch(err => console.error(err));
  }

  getAllProducts() {
    return this.productCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data};
      }))
    );
  }

  getSingleProduct(id) {
    return this.productCollection.doc(id).snapshotChanges().pipe(
      map(a => {
        const data = a.payload.data() as Product;
        const id = a.payload.id;
        return { id, ...data};
      })
    );
  }

}
