import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvaLoginComponent } from './Components/Login/canva-login/canva-login.component';
import { CanvaRegisterComponent } from './Components/Register/canva-register/canva-register.component';

const routes: Routes = [
  {path:"Login",component:CanvaLoginComponent},
  {path:"Register",component:CanvaRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
