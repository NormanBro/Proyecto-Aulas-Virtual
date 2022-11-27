import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ServPostService } from 'src/app/Service/ServPost/serv-post.service';

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
      const BODY={
        "Codigo":this.FormRegister.value.Codigo,
        "Correo":this.FormRegister.value.Correo,
        "Password":this.FormRegister.value.Contraseña
      }

      this.ServPost.PostAll('tutor',BODY).subscribe(resp=>{
        this._Router.navigate(["Login"]);
      })
    }
  }

  openSnackBar(message:string,action:string) {
    this._snackBar.open(message,action)
  }
  
  constructor(
    public _snackBar:MatSnackBar,
    private _Router:Router,
    private ServPost:ServPostService
    ) { }

  ngOnInit(): void {
    
  }

}
