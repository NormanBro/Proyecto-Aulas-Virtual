import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvaLoginComponent } from './Components/Login/canva-login/canva-login.component';
import { FormLoginComponent } from './Components/Login/form-login/form-login.component';

//Angular Material

import { MaterialModule } from './Material/material';
import { CanvaRegisterComponent } from './Components/Register/canva-register/canva-register.component';
import { FormEstudianteComponent } from './Components/Register/form-estudiante/form-estudiante.component';
import { FormMaestroComponent } from './Components/Register/form-maestro/form-maestro.component';
import { FormTutorComponent } from './Components/Register/form-tutor/form-tutor.component';
import { NavegadorComponent } from './Components/Extras/navegador/navegador.component';
import { CanvaHomeComponent } from './Components/Home/canva-home/canva-home.component';
import { NavEstudianteComponent } from './Components/Extras/nav-estudiante/nav-estudiante.component';
import { NavMaestroComponent } from './Components/Extras/nav-maestro/nav-maestro.component';
import { NavTutorComponent } from './Components/Extras/nav-tutor/nav-tutor.component';
import { HomeEstudianteComponent } from './Components/Home/home-estudiante/home-estudiante.component';
import { HomeMaestroComponent } from './Components/Home/home-maestro/home-maestro.component';
import { HomeTutorComponent } from './Components/Home/home-tutor/home-tutor.component';
import { CanvaNotificacionComponent } from './Components/Notificacion/canva-notificacion/canva-notificacion.component';
import { BodyNotificacionComponent } from './Components/Notificacion/body-notificacion/body-notificacion.component';
import { CanvaMensajeComponent } from './Components/Mensajes/canva-mensaje/canva-mensaje.component';
import { BodyMensajeComponent } from './Components/Mensajes/body-mensaje/body-mensaje.component';
import { ZonaMensajesComponent } from './Components/Mensajes/Partes/zona-mensajes/zona-mensajes.component';
import { ZonaGruposComponent } from './Components/Mensajes/Partes/zona-grupos/zona-grupos.component';
import { CanvaAddMaterialComponent } from './Components/NewMateria/canva-add-material/canva-add-material.component';
import { BodyAddMaterialComponent } from './Components/NewMateria/body-add-material/body-add-material.component';
import { DialogAccesoAulaComponent } from './Components/Extras/Dialogos/dialog-acceso-aula/dialog-acceso-aula.component';
import { CanvaUnidadComponent } from './Components/Unidades/canva-unidad/canva-unidad.component';
import { BodyUnidadComponent } from './Components/Unidades/body-unidad/body-unidad.component';
import { CanvaTareaComponent } from './Components/Tareas/canva-tarea/canva-tarea.component';
import { BodyTareaComponent } from './Components/Tareas/body-tarea/body-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvaLoginComponent,
    FormLoginComponent,
    CanvaRegisterComponent,
    FormEstudianteComponent,
    FormMaestroComponent,
    FormTutorComponent,
    NavegadorComponent,
    CanvaHomeComponent,
    NavEstudianteComponent,
    NavMaestroComponent,
    NavTutorComponent,
    HomeEstudianteComponent,
    HomeMaestroComponent,
    HomeTutorComponent,
    CanvaNotificacionComponent,
    BodyNotificacionComponent,
    CanvaMensajeComponent,
    BodyMensajeComponent,
    ZonaMensajesComponent,
    ZonaGruposComponent,
    CanvaAddMaterialComponent,
    BodyAddMaterialComponent,
    DialogAccesoAulaComponent,
    CanvaUnidadComponent,
    BodyUnidadComponent,
    CanvaTareaComponent,
    BodyTareaComponent
  ],
  entryComponents:[
    DialogAccesoAulaComponent,
    CanvaAddMaterialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
