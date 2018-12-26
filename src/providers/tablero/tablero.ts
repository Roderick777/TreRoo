import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalesProvider } from '../globales/globales';

@Injectable()
export class TableroProvider {

  constructor(public http: HttpClient, private Global : GlobalesProvider) {
    console.log('Hello TableroProvider Provider');
  }

  getTableros(){
    return new Promise((resolve, reject) => {
      this.http.get(this.Global.urlProyecto+'/tablero').subscribe(res => {
        resolve(res); 
      }, (err) => {
        reject(err); 
      });             
    })
  }

  postTableros(parametros:object){
    return new Promise((resolve, reject) => {
      this.http.post(this.Global.urlProyecto+'/tableroPost', parametros).subscribe(res => {
        resolve(res); //devolvemos la respuesta de la llamada http
      }, (err) => {
        reject(err); //devolvemos el error si se diera
      });             
    })
  }

}
