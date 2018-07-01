import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar} from '@angular/material';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
	user: Observable<User>;

  constructor(private afAuth: AngularFireAuth, 
  						private afs: AngularFirestore,
  						private router: Router,
              private snackBar: MatSnackBar) { 
    // Get auth data, then get firestore user document || null
  	this.user = this.afAuth.authState.pipe(
  			switchMap(user => {
  				if (user) {
            return this.afs.collection('users').doc(user.uid).valueChanges();
  				} else {
  					return of(null);
  				}
  			})
  		);
    console.log(this.user);
  }

  // Email/Password Auth
  emailSignUp(value) {
    this.afAuth.auth.createUserWithEmailAndPassword(value.email, value.password)
                              .then(doc => {
                                this.saveUserData(doc.user, value.displayName)
                                this.router.navigate(['/billing-address']); // create initial user document
                                this.snackBar.open('Registration successfull!!', 'Welcome', {
                                  duration: 3000
                                });
                              })
                              .catch(error => this.handleError(error));
  }

  emailLogin(value) {
    return this.afAuth.auth.signInWithEmailAndPassword(value.email, value.password)
                              .then(doc => {
                                console.log(doc.user);
                                this.router.navigate(['/']);
                              })
                              .catch(error => this.handleError(error));
  }

  // Sign out
  logout() {
    this.afAuth.auth.signOut()
            .then(() => {this.router.navigate(['/']);})
              .catch(err => console.error(err));
    
  }

  // If error, console log and notify user with modal or snackbar
  private handleError(error) {
    console.error(error);
    this.snackBar.open(error.message, 'error', {
      duration: 3000
    });
  }

  // Save user data to firestore after succesful registeration
  private saveUserData(user, name) {
    const data: User = {
      uid: user.uid,
      createdAt: new Date().getTime(),
      email: user.email,
      displayName: user.displayName || name,
      photoURL: user.photoURL || 'https://firebasestorage.googleapis.com/v0/b/ng6-fashionagariya.appspot.com/o/profileImgs%2Fblank-profile.png?alt=media&token=f872adfa-c903-434c-9752-45fea4b2d6d7',
      admin: false,
      blogger: true,
      enabled: true
    }
    return this.afs.collection('users').doc(data.uid).set(data);
  }


}
