import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GestosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-gestos',
  templateUrl: 'gestos.html',
})
export class GestosPage {
 public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
tocar(e) {
    this.tap++
}
presionar(e) {
    this.press++
  }
arrastrar(e) {
    this.pan++
  }
deslizar(e) {
    this.swipe++
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad GestosPage');
  }

}
