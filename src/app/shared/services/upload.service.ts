import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';

import { Upload } from '../models/upload.model';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private afs: AngularFirestore) { }

}
