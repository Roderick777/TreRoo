import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GlobalesProvider } from '../globales/globales';

@Injectable()
export class ListaProvider {

  constructor(public http: HttpClient, private Global:GlobalesProvider) {
    console.log('Hello ListaProvider Provider');
  }

  getListas(){
    return new Promise((resolve, reject) => {
      this.http.get(this.Global.urlProyecto+'/lista').subscribe(res => {
        resolve(res); 
      }, (err) => {
        reject(err); 
      });             
    })
  }

  postListas(parametros:object){
    return new Promise((resolve, reject) => {
      this.http.post(this.Global.urlProyecto+'/lista', parametros).subscribe(res => {
        resolve(res); //devolvemos la respuesta de la llamada http
      }, (err) => {
        reject(err); //devolvemos el error si se diera
      });             
    })
  }
}
