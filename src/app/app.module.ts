import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { TablerosPage } from '../pages/tableros/tableros';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpClientModule,HttpClient } from '@angular/common/http';
import { GlobalesProvider } from '../providers/globales/globales';
import { TableroProvider } from '../providers/tablero/tablero';

import { ListasTableroPageModule } from '../pages/listas-tablero/listas-tablero.module';
import { InicioPageModule } from '../pages/inicio/inicio.module';
import { TareasPageModule } from '../pages/tareas/tareas.module';

import { ListaProvider } from '../providers/lista/lista';
import { TareaProvider } from '../providers/tarea/tarea';

import { NuevaTareaPageModule } from '../pages/nueva-tarea/nueva-tarea.module';
import { EditarTareaPageModule } from '../pages/editar-tarea/editar-tarea.module';
import { VerTareaPageModule } from '../pages/ver-tarea/ver-tarea.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TablerosPage,  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    InicioPageModule,
    ListasTableroPageModule,
    TareasPageModule,
    NuevaTareaPageModule,
    EditarTareaPageModule,
    VerTareaPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TablerosPage, 
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpClientModule,
    GlobalesProvider,
    TableroProvider,
    ListaProvider,
    TareaProvider
  ]
})
export class AppModule {}
