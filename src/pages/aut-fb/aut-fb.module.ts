import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutFbPage } from './aut-fb';

@NgModule({
  declarations: [
    AutFbPage,
  ],
  imports: [
    IonicPageModule.forChild(AutFbPage),
  ],
  exports: [
    AutFbPage
  ]
})
export class AutFbPageModule {}
