import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-form-tutor',
  templateUrl: './form-tutor.component.html',
  styleUrls: ['./form-tutor.component.css']
})
export class FormTutorComponent implements OnInit {

  FormRegister=new FormGroup({
    Codigo:new FormControl('',[Validators.required,Validators.minLength(36)]),
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
  
  constructor(public _snackBar:MatSnackBar) { }

  ngOnInit(): void {
    
  }

}
