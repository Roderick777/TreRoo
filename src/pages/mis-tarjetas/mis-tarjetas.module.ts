import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisTarjetasPage } from './mis-tarjetas';

@NgModule({
  declarations: [
    MisTarjetasPage,
  ],
  imports: [
    IonicPageModule.forChild(MisTarjetasPage),
  ],
})
export class MisTarjetasPageModule {}
