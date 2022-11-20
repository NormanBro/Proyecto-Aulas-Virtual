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
    CanvaHomeComponent
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
