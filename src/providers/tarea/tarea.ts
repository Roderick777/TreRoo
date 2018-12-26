import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalesProvider } from '../globales/globales';

@Injectable()
export class TareaProvider {
  ruta:string = 'tarea';
  constructor(
    public http: HttpClient
    , private Global:GlobalesProvider
    ) 
  {
  }

  get(){
    return new Promise((resolve, reject) => {
      this.http.get(this.Global.urlProyecto +'/'+ this.ruta).subscribe(res => {
        resolve(res); 
      }, (err) => {
        reject(err); 
      });             
    })
  }

  post(parametros:object){
    return new Promise((resolve, reject) => {
      this.http.post(this.Global.urlProyecto +'/'+ this.ruta, parametros).subscribe(res => {
        resolve(res); //devolvemos la respuesta de la llamada http
      }, (err) => {
        reject(err); //devolvemos el error si se diera
      });             
    })
  }

}
