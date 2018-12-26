import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarTareaPage } from './editar-tarea';

@NgModule({
  declarations: [
    EditarTareaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarTareaPage),
  ],
})
export class EditarTareaPageModule {}
