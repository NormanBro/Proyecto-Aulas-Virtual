import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-body-add-material',
  templateUrl: './body-add-material.component.html',
  styleUrls: ['./body-add-material.component.css']
})
export class BodyAddMaterialComponent implements OnInit {
  FormAdd=new FormGroup({
    Nombre:new FormControl('',[Validators.required]),
    Avatar:new FormControl('',[Validators.required])
  })
  constructor(private _snackBar:MatSnackBar) { }

  FileAvatar!:File;

  EntrarMateria(){
    if(this.FormAdd.value.Nombre){
      console.log(this.FileAvatar);
    }else{
      this._snackBar.open('No se ha agregado nada','Dismiss');
    } 
  }

  OnFilesAvatar(e:any){
    this.FileAvatar=e.target.files;
  }

  ngOnInit(): void {
  }

}
