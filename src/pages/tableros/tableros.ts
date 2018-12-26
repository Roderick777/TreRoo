import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TableroProvider } from '../../providers/tablero/tablero';
import { GlobalesProvider } from '../../providers/globales/globales';
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-tableros',
  templateUrl: 'tableros.html',
})
export class TablerosPage {

  tableros:any=[
    {titulo:"Tablero 1"},
    {titulo:"Tablero 2"}
  ];

  constructor(
    public navCtrl: NavController
    , private Tablero: TableroProvider
    , private Global : GlobalesProvider
    , private alertCtrl: AlertController
    ) {

  }  

  crearTablero()
  {
    var contexto:any =  this;
    this.ventanaPrompt('Crear tablero', 'Crear tablero', 'titulo_tablero', 'Crear', function(data){
      console.log(data);
      var datos = {
        titulo_tablero: data.titulo_tablero,
        usuarioId: contexto.Global.usuarioId
      }
      contexto.Tablero.postTableros(datos).then(
        res => {
          console.log(res);
          contexto.tableros.push(res);
          contexto.navCtrl.push("ListasTableroPage", { tablero:res }) 
        },
        err => {
          console.log(err);
        });

    });
  }

  abrirTablero(tablero:object)
  {
    this.navCtrl.push("ListasTableroPage", { tablero: tablero }) 
  }

  ionViewDidEnter() {
    var contexto:any =  this;
    console.log('ionViewDidLoad TablerosPage');
    contexto.Tablero.getTableros().then(
      res => {
        console.log(res);
        contexto.tableros = res;
      },
      err => {
        console.log(err);
      });
  }

  ventanaPrompt(titulo:string, placeholder:string, nameInput:string, textoBoton:string, callback:any)
  {
    
      let alert = this.alertCtrl.create({
        title: titulo,
        inputs: [
          {
            name: nameInput,
            placeholder: placeholder
          },
        ],
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: textoBoton,
            handler: data => {
              callback(data);
              //if (User.isValid(data.username, data.password)) {
                // logged in!
              //} else {
                // invalid login
              //  return false;
              //}
            }
          }
        ]
      });
      alert.present();
    
  }


}
