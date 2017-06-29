import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthserviceProvider } from '../providers/authservice/authservice';
import { LoginPage } from '../pages/login/login';
import { GestosPage } from '../pages/gestos/gestos';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegistrarPage } from '../pages/registrar/registrar';
import { AutFbPage } from '../pages/aut-fb/aut-fb';
import { FormularioPage } from '../pages/formulario/formulario';
import { EditarPage } from '../pages/editar/editar';



export const config = {
  apiKey: "AIzaSyAQ3buE9IkEwG72V270DAXdbjg6qn12Wjk",
  authDomain: "parcial1-a8854.firebaseapp.com",
  databaseURL: "https://parcial1-a8854.firebaseio.com",
  projectId: "parcial1-a8854",
  storageBucket: "parcial1-a8854.appspot.com",
  messagingSenderId: "1086432467925"
}

firebase.initializeApp(config)

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    EditarPage,
    GestosPage,
    RegistrarPage,
    AutFbPage,
    FormularioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    EditarPage,
    GestosPage,
    RegistrarPage,
    AutFbPage,
    FormularioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthserviceProvider
  ]
})
export class AppModule { }
