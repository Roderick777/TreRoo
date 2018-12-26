import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TareaProvider } from '../../providers/tarea/tarea';
import { GlobalesProvider } from '../../providers/globales/globales';
import { NuevaTareaPage } from '../nueva-tarea/nueva-tarea';
import { VerTareaPage } from '../ver-tarea/ver-tarea';

@IonicPage()
@Component({
  selector: 'page-tareas',
  templateUrl: 'tareas.html',
})
export class TareasPage {

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
    ) 
  {}

  ionViewWillEnter() {
    console.log('ionViewDidLoad TareasPage');
    console.log(this.navParams.data);
    this.id_usuario = this.navParams.data.id_usuario;
    this.id_tablero = this.navParams.data.id_tablero;
    this.id_lista = this.navParams.data.id;
    this.TareaProv.get().then(
      res => {
        console.log(res);
        this.tareas = res;
      },
      err => {
        console.log(err);
      }
    );
    
  }

  nuevaTarea()
  {
    var contexto = this;
    var enviar = {
      id_usuario            :this.id_usuario,
      id_tablero            :this.id_tablero,
      id_lista              :this.id_lista,
    };
    this.Global.modal(NuevaTareaPage, enviar, function(data){
      contexto.tareas.push(data);
    });
  }

  abrirTarea(){
    this.Global.modal(VerTareaPage, {});
  }

  guardarTarea()
  {
    var datos = this.datosNuevaTarea();
    this.TareaProv.post(datos).then(
      res => {
        console.log(res);
        this.creandoTarea = false;
        this.Global.messageBox("Mensaje", "La tarea ha sido creada exitosamente");
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
      img_tarea             : this.img_tarea,
      id_usuario            : this.id_usuario,
      id_tablero            : this.id_tablero,
      id_lista              : this.id_lista,
      estado_tarea          : this.estado_tarea
    }; 
    return datos;
  }

  
}
