import { Component, OnInit,Input } from '@angular/core';
import { ServGetService } from 'src/app/Service/ServGet/serv-get.service';
import { pipe,map } from 'rxjs';

@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.component.html',
  styleUrls: ['./home-estudiante.component.css']
})
export class HomeEstudianteComponent implements OnInit {

  DatosUnion:any=[]
  DatosMateria:any=[]
  ArrayMateria:any=[]
  constructor(private ServGet:ServGetService) {
    this.ServGet.GetAllBD_IDUser("unido",sessionStorage.getItem("ID_usuario")||"").subscribe(Data=>{
      this.DatosUnion=Data;
      
      this.ServGet.GetAllBD("materias").subscribe(Datas=>{
        this.DatosMateria=Datas;
        
        for(let i=0; i<this.DatosUnion.length;i++){
          let IDMaterias=this.DatosMateria.filter((e:any)=>{
            return e.ID_Materia==this.DatosUnion[i].ID_Materia;
          })
          this.ArrayMateria.push(IDMaterias);
        }
        this.ArrayMateria=this.ArrayMateria.reduce((acc:any,el:any)=>acc.concat(el),[])
        console.log(this.ArrayMateria);

      })
    });
  }


  ngOnInit(): void {
  }

}
