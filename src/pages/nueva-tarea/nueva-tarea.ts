import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';
import { GlobalesProvider } from '../../providers/globales/globales';

@IonicPage()
@Component({
  selector: 'page-nueva-tarea',
  templateUrl: 'nueva-tarea.html',
})
export class NuevaTareaPage {

  tareas:any;
  
  titulo_tarea          :string = '';
  descripcion_tarea     :string = '';
  img_tarea             :string = '';
  id_usuario            :number = 0;
  id_tablero            :number = 0;
  id_lista              :number = 0;
  estado_tarea          :number = 0;
  creandoTarea          :boolean = false;

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , private TareaProv: TareaProvider
    , private Global: GlobalesProvider
    , private alertCtrl: AlertController
    , private viewCtrl: ViewController
    ) 
  {}

  ionViewWillEnter() {
    console.log('ionViewDidLoad NuevaTareaPage');
    this.id_usuario = this.navParams.data.id_usuario;
    this.id_tablero = this.navParams.data.id_tablero;
    this.id_lista = this.navParams.data.id_lista;
  }

  cerrarModal(datos?:object) {
    let data = { 'foo': 'bar' };
    if(typeof(datos)!="undefined")
    {
      this.viewCtrl.dismiss(datos);
    }
    else
    {
      this.viewCtrl.dismiss(data);
    }
  }

  guardarTarea()
  {
    var datos = this.datosNuevaTarea();
    this.TareaProv.post(datos).then(
      res => {
        console.log(res);
        this.creandoTarea = false;
        this.Global.messageBox("Mensaje", "La tarea ha sido creada exitosamente");
        this.cerrarModal(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  datosNuevaTarea()
  {
    var datos = {
      titulo_tarea          : this.titulo_tarea , 
      descripcion_tarea     : this.descripcion_tarea,
      img_tarea             : '',
      id_usuario            : this.id_usuario,
      id_tablero            : this.id_tablero,
      id_lista              : this.id_lista,
      estado_tarea          : 1
    }; 
    return datos;
  }

}
