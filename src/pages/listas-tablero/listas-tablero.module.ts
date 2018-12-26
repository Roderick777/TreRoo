import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListasTableroPage } from './listas-tablero';

@NgModule({
  declarations: [
    ListasTableroPage,
  ],
  imports: [
    IonicPageModule.forChild(ListasTableroPage),
  ],
})
export class ListasTableroPageModule {}
