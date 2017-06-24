import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListasPage } from './listas';

@NgModule({
  declarations: [
    ListasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListasPage),
  ],
  exports: [
    ListasPage
  ]
})
export class ListasPageModule {}
