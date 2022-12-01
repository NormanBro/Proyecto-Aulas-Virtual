import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ServGetService } from 'src/app/Service/ServGet/serv-get.service';
import { ServPostService } from 'src/app/Service/ServPost/serv-post.service';


@Component({
  selector: 'app-dialog-acceso-aula',
  templateUrl: './dialog-acceso-aula.component.html',
  styleUrls: ['./dialog-acceso-aula.component.css']
})
export class DialogAccesoAulaComponent implements OnInit {

  FormAdd=new FormGroup({
    Codigo:new FormControl('',[Validators.required])
  })
  Codigos:any=[]
  constructor(
    private _snackBar:MatSnackBar,
    private ServGet:ServGetService,
    private ServPost:ServPostService
    ) {
      ServGet.GetAllBD("materias").subscribe(Data=>{
        this.Codigos=Data;
      })
     }

  EntrarMateria(){
    if(this.FormAdd.valid){
      const Codigo=this.Codigos.filter((Dato:any)=>{
        return Dato.Codigo==this.FormAdd.value.Codigo;
      })
      
      if(Codigo){
        const BODY={
          "ID_usuario":sessionStorage.getItem("ID_usuario")||"",
          "ID_materia":Codigo[0].ID_Materia,
        }

        this.ServPost.PostAll("union",BODY).subscribe(Resp=>{
          //console.log(Resp);
          this._snackBar.open('Se ha Agregado el Aula','Dismiss');
        });
      }
      
    }else{
      this._snackBar.open('No se ha agregado nada','Dismiss');
    }
    
  }
  ngOnInit(): void {
  }

}
