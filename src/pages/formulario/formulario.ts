import { Component } from '@angular/core';
import { NavController, NavParams, ToastController, ModalController, AlertController, ViewController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { EditarPage } from '../editar/editar';



/**
 * Generated class for the FormularioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-formulario',
  templateUrl: 'formulario.html',
})
export class FormularioPage {
 private data: FormGroup;
  private formexdata: FormGroup;

 info: any;
  records: FirebaseListObservable<any>;

  constructor(public navParams:NavParams,public viewCtrl:ViewController , public navCtrl: NavController, public formBuilder: FormBuilder,
    public toastCtrl: ToastController, public modalCtrl: ModalController, public alertCtrl: AlertController, db: AngularFireDatabase) {
  
 this.records = db.list('/datos');
    this.formexdata = this.formBuilder.group
      ({
        name: ['', Validators.required],
        gender: ['', Validators.required],
        hobby: ['', Validators.required]
      })
}



guardarForm() {
    if (this.formexdata.valid) {
      this.records.push(this.formexdata.value)
    }
    else {
      console.error('Verifique su informacion')
    }
  }

 delete(key, name){

    let deleteToast = this.toastCtrl.create({
      position: 'top',
      message: name + 'ha sido borrado',
      showCloseButton: true,
      closeButtonText: 'OK'
    });
    let deleteAlert = this.alertCtrl.create({
      title: 'Eliminar',
      subTitle: 'Vas a eliminar ' + name,
      buttons: [
        {
          text: 'Cancelar',
          handler: () =>{

          }
        },
        {
          text: 'OK',
          handler: () => {
            this.records.remove(key).then(_ => deleteToast.present())
          }
        }
      ]
    })

    deleteAlert.present();

    console.log(key);
    
  }

  edit(key){
    let info = {
      key: key
    }
    this.modalCtrl.create(EditarPage, info).present();
  
  this.info = "nada";
    firebase.auth().onAuthStateChanged(user => {
      if (user.emailVerified) {
        this.info = 'verificado'
      } else {
        this.info = 'no verificado'
      }
    })

    console.log('ionViewDidLoad RegisterPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormularioPage');
  }

}
