import { Injectable } from '@angular/core';
import { AngularFirestore,AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { map, finalize } from 'rxjs/operators';
import * as firebase from 'firebase/app';
import {MatSnackBar} from '@angular/material';

import { AuthService } from './auth.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
	profileFolder;
	userCollection: AngularFirestoreCollection<User>;
	user: User;

  constructor(private afs: AngularFirestore, 
              private authService: AuthService,
              private snackBar: MatSnackBar) { 
  	authService.user.subscribe(doc => {
  		this.user = doc;
  	})
  	this.profileFolder = 'profileImgs';
  	this.userCollection = afs.collection('users');
  }

  updateUserProfileImg() {
  	let storageRef = firebase.storage().ref();
  	for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
  	  let path = `/${this.profileFolder}/${selectedFile.name}`;
  	  var metadata = { contentType: 'image/jpeg', app: 'Fashionagariya web!'};
  	  var uploadTask = storageRef.child(path).put(selectedFile, metadata);

  	  uploadTask.on('state_changed', 
  	    () => {
  	      // Upload completed successfully, now we can get the download URL
  	      console.log('Image uploaded!!');
  	      uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
  	        this.user.photoURL = downloadURL;
  	        console.log('File available at: ', this.user.photoURL);
  	        // Save category in firestore
  	        return this.userCollection.doc(this.user.uid).update(this.user)
  	                      .then(doc => {
                            this.snackBar.open('Profile image is updated!', 'Success', {
                              duration: 5000
                            });
                          })
  	                      .catch(err => console.error(err));
  	      }).catch(err => console.error(err));
  	    },
  	    (error) => {
  	      console.log(error);
  	  });
  	}
  }

  updateUserProfileName(name: string) {
    this.user.displayName = name;
    return this.userCollection.doc(this.user.uid).update(this.user)
                  .then(doc => {
                    this.snackBar.open('Profile name is updated!', 'Success', {
                      duration: 5000
                    });
                  })
                  .catch(err => console.error(err));
  }

}
