import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {
  private registerData: FormGroup;
  displayName; 


  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {


    //
    this.registerData = this.formBuilder.group({
      registerMail: ['', Validators.required],
      registerPass: ['', Validators.required]
    })
     }



  register() {
    firebase.auth().createUserWithEmailAndPassword(this.registerData.controls['registerMail'].value, this.registerData.controls['registerPass'].value)
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarPage');
  }

}
