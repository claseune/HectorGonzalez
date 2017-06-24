import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController, AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private data: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public formBuilder: FormBuilder,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    db: AngularFireDatabase) {

this.data = this.formBuilder.group
      ({
        username: ['', Validators.required],
        password: ['', Validators.required]
      })
  }

login() {
    firebase.auth().signInWithEmailAndPassword(this.data.controls['username'].value, this.data.controls['password'].value)
      .then((response) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (!user.emailVerified) {
            user.sendEmailVerification();
          }
        })
        console.log(response)
              })
      .catch((error) => {
        console.log(error.message)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
