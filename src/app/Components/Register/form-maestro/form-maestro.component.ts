import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServPostService } from 'src/app/Service/ServPost/serv-post.service';

@Component({
  selector: 'app-form-maestro',
  templateUrl: './form-maestro.component.html',
  styleUrls: ['./form-maestro.component.css']
})
export class FormMaestroComponent implements OnInit {

  FormRegister=new FormGroup({
    Nombre:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    ApellidoPrimario:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    ApellidoSecundario:new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]+$')]),
    Correo:new FormControl('',[Validators.required,Validators.email]),
    Contraseña:new FormControl('',[Validators.required,Validators.minLength(8)]),
    ConfirmarContraseña:new FormControl('',[Validators.required])
  })

  EnterRegister(){
    
    if(this.FormRegister.value.Contraseña !=this.FormRegister.value.ConfirmarContraseña ){
      this.openSnackBar('No es igual la contraseña','Undo');
      
    }else{
      const BODY={
        "Nombres":this.FormRegister.value.Nombre,
        "AP":this.FormRegister.value.ApellidoPrimario,
        "AM":this.FormRegister.value.ApellidoSecundario,
        "Correo":this.FormRegister.value.Correo,
        "Password":this.FormRegister.value.Contraseña
      }
      this.ServPost.PostAll('maestro',BODY).subscribe(Resp=>{
        this._Router.navigate(["Login"]);
      })

    }
  }

  openSnackBar(message:string,action:string) {
    this._snackBar.open(message,action)
  }
  constructor(
    private _snackBar:MatSnackBar,
    private _Router:Router,
    private ServPost:ServPostService
    ) { }

  ngOnInit(): void {
  }

}
