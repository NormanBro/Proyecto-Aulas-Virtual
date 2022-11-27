import { Component, OnInit,Input } from '@angular/core';
import { FormControl,FormGroup,Validators  } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  @Input() DataBD:any;


  FormLogin=new FormGroup({
    Correo:new FormControl('',[Validators.required,Validators.email]),
    Contraseña:new FormControl('',[Validators.required])
  });

  constructor(
    private _snackBar:MatSnackBar,
    private _Router:Router
    ) {
      if(sessionStorage.getItem('ID_usuario'))this._Router.navigate(['Home']);
    }
  IniciarSesion(){

    const CorreoForm=this.FormLogin.value.Correo;
    const ContraseñaForm=this.FormLogin.value.Contraseña;

    const Correo=this.DataBD.filter((x:any)=> x.Correo==CorreoForm)
    
    if(Correo[0].Password===ContraseñaForm){
      sessionStorage.setItem('ID_usuario',Correo[0].ID_Usuario);
      sessionStorage.setItem('Rol',Correo[0].ID_Rol);
      this._Router.navigate(['Home']);
    }else{
      this.OpenSnackBar('No existe el correo','Dismiss');
      
    }
    
  }

  OpenSnackBar(Message:string,action:string){
    this._snackBar.open(Message,action)
  }

  ngOnInit(): void {
  }

}
