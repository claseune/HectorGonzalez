import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';



@Component({
  selector: 'page-aut-fb',
  templateUrl: 'aut-fb.html',
})
export class AutFbPage {

 displayName;  
  
  items: FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams, afDB: AngularFireDatabase, private afAuth: AngularFireAuth) {
this.items = afDB.list('/logeadosfb');  

afAuth.authState.subscribe(user => {
      if (!user) {
        this.displayName = null;        
        return;
      }
      this.displayName = user.displayName;      
    });
}

LogearConFB() {
    this.afAuth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => console.log(res));
  }

QuitarLogeoFB() {
    this.afAuth.auth.signOut();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AutFbPage');
  }





}
