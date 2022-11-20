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
import {MatTabsModule} from '@angular/material/tabs';
import { CanvaRegisterComponent } from './Components/Register/canva-register/canva-register.component';

@NgModule({
  declarations: [
    AppComponent,
    CanvaLoginComponent,
    FormLoginComponent,
    CanvaRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    MatTabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
