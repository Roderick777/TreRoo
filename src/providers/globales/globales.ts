import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AlertController, ModalController } from 'ionic-angular';

@Injectable()
export class GlobalesProvider {

  urlProyecto:string = 'http://localhost:8000/api';
  usuarioId:number = 1;


  constructor(public http: HttpClient, private alertCtrl: AlertController, private modalCtrl: ModalController ) {
    console.log('Hello GlobalesProvider Provider');
  }

  messageBox(titulo:string, texto:string) {
    let alert = this.alertCtrl.create({
      title: titulo,
      subTitle: texto,
      buttons: ['Cerrar']
    });
    alert.present();
  }

  modal(vista:any, datos:object, callback?:any) {
    //let generalModal = this.modalCtrl.create(vista, datos);
    //generalModal.present();
    let generalModal = this.modalCtrl.create(vista, datos);
    if (typeof(callback) != 'undefined')
    {
      generalModal.onDidDismiss(data => {
          callback(data);
      });
    }
    generalModal.present();
  }
}
