import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoTableroPage } from './nuevo-tablero';

@NgModule({
  declarations: [
    NuevoTableroPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoTableroPage),
  ],
})
export class NuevoTableroPageModule {}
