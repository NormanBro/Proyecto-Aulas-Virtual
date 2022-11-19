import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanvaLoginComponent } from './Components/Login/canva-login/canva-login.component';
import { FormLoginComponent } from './Components/Login/form-login/form-login.component';

//Angular Material

import { MaterialModule } from './material.module';


@NgModule({
  declarations: [
    AppComponent,
    CanvaLoginComponent,
    FormLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
