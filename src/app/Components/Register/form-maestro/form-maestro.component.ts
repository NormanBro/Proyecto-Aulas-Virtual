import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

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
      this.openSnackBar('Registrado','Dismiss');
      console.log(this.FormRegister.value);
    }
  }

  openSnackBar(message:string,action:string) {
    this._snackBar.open(message,action)
  }
  constructor(private _snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }

}
