import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServPostService } from 'src/app/Service/ServPost/serv-post.service';

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
  constructor(
    private _snackBar:MatSnackBar,
    private ServPost:ServPostService
    ) { }

  FileAvatar:any;

  EntrarMateria(){
    
    if(this.FormAdd.value.Nombre){

      const Body=new FormData()
      Body.append('myFile',this.FileAvatar.fileRaw,this.FileAvatar.fileName)
      Body.append('Nombre',this.FormAdd.value.Nombre);
      Body.append('Imagen',this.FileAvatar.fileName || 'default.jpg');
      Body.append('ID_usuario',sessionStorage.getItem('ID_usuario') || '');
      
      /*const Body={
        Nombre:this.FormAdd.value.Nombre,
        Imagen:this.FileAvatar||'default.jpg',
        ID_usuario:sessionStorage.getItem('ID_usuario')
      }*/
      
      this.ServPost.PostAll('materias',Body).subscribe(resp=>{
        
      })

    }else{
      this._snackBar.open('No se ha agregado nada','Dismiss');
    } 
  }

  OnFilesAvatar(e:any){
    [File]=e.target.files;
    this.FileAvatar={
      fileRaw:File,
      fileName:File.name
    }

  }

  ngOnInit(): void {
  }

}
