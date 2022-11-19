import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvaLoginComponent } from './Components/Login/canva-login/canva-login.component';

const routes: Routes = [
  {path:"Login",component:CanvaLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
