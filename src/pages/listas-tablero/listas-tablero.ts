import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ListaProvider } from '../../providers/lista/lista';
import { TareasPage } from '../tareas/tareas';
import { GlobalesProvider } from '../../providers/globales/globales';


/**
 * Generated class for the ListasTableroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listas-tablero',
  templateUrl: 'listas-tablero.html',
})
export class ListasTableroPage {

  Tablero : any;
  Lista : any;
  listas : any;
  tituloTablero : string;
  idUsuario : number;
  idTablero : number;
  nombreNuevaLista : string;
  creandoLista : boolean = false;

  constructor(
    public navCtrl: NavController
    , public navParams: NavParams
    , private ListaProv: ListaProvider
    , private Global: GlobalesProvider
    ) 
  {
  }

  ionViewWillEnter() {
    console.log('ionViewDidLoad ListasTableroPage');
    this.Tablero = this.navParams.data.tablero;
    this.tituloTablero = this.Tablero.titulo_tablero;
    this.idUsuario = this.Tablero.usuario_id;
    this.idTablero = this.Tablero.id;
    this.cargarListas();
  }

  abrirLista(lista:object)
  {
    this.navCtrl.push(TareasPage, lista);    
  }

  nuevaLista()
  {
    this.creandoLista = true;
  }

  cargarListas()
  {
    var contexto = this;
    contexto.ListaProv.getListas().then(
      res => {
        console.log(res);
        contexto.listas = res;
      },
      err => {
        console.log(err);
      });
  }

  guardarLista(){
    var contexto = this;
    var datos = {
      titulo_lista        : this.nombreNuevaLista,
      descripcion_lista   : '',
      img_lista           : '',
      id_usuario          : this.idUsuario,
      id_tablero          : this.idTablero
    };

    contexto.ListaProv.postListas(datos)
    .then(
      res => {
        console.log(res);
        this.creandoLista = false;
        this.Global.messageBox("Mensaje", "Se ha creado una nueva lista en el tablero "+ this.tituloTablero);
      },
      err => {
        console.log(err);
      }
    );
  }

}
