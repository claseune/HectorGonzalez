import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { GestosPage } from '../gestos/gestos';
import { RegistrarPage } from '../registrar/registrar';
import { AutFbPage } from '../aut-fb/aut-fb';
import { FormularioPage } from '../formulario/formulario';


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

goGestos(){
  this.navCtrl.push(GestosPage)
}  
goRegistrar(){
  this.navCtrl.push(RegistrarPage)
}
goAutfb(){
  this.navCtrl.push(AutFbPage)
}

goFormulario(){
  this.navCtrl.push(FormularioPage)
}
}
