import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ListasPage } from '../listas/listas';
import { GestosPage } from '../gestos/gestos';
import { RegistrarPage } from '../registrar/registrar';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
goLogin() {
    this.navCtrl.push(LoginPage);
  }
goListas() {
    this.navCtrl.push(ListasPage);
  }
goGestos(){
  this.navCtrl.push(GestosPage)
}  
goRegistrar(){
  this.navCtrl.push(RegistrarPage)
}

}
