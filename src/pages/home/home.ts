import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tableros:any=[
    {titulo:"Tablero 1"},
    {titulo:"Tablero 2"}
];

  constructor(public navCtrl: NavController) {

  }

  abrirTablero(){

  }

}
