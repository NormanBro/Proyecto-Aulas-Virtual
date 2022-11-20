import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvaHomeComponent } from './Components/Home/canva-home/canva-home.component';
import { CanvaLoginComponent } from './Components/Login/canva-login/canva-login.component';
import { CanvaMensajeComponent } from './Components/Mensajes/canva-mensaje/canva-mensaje.component';
import { CanvaNotificacionComponent } from './Components/Notificacion/canva-notificacion/canva-notificacion.component';
import { CanvaRegisterComponent } from './Components/Register/canva-register/canva-register.component';

const routes: Routes = [
  {path:"Login",component:CanvaLoginComponent},
  {path:"Register",component:CanvaRegisterComponent},
  {path:"Home",component:CanvaHomeComponent},
  {path:"Mensaje",component:CanvaMensajeComponent},
  {path:"Notificacion",component:CanvaNotificacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
