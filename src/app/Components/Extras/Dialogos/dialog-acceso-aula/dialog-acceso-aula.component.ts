import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-acceso-aula',
  templateUrl: './dialog-acceso-aula.component.html',
  styleUrls: ['./dialog-acceso-aula.component.css']
})
export class DialogAccesoAulaComponent implements OnInit {

  FormAdd=new FormGroup({
    Nombre:new FormControl('',[Validators.required])
  })
  constructor(private _snackBar:MatSnackBar) { }

  EntrarMateria(){
    if(this.FormAdd.valid){
      console.log(this.FormAdd.value.Nombre);
    }else{
      this._snackBar.open('No se ha agregado nada','Dismiss');
    }
    
  }
  ngOnInit(): void {
  }

}
