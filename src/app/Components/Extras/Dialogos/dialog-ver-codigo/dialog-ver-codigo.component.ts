import { Component, OnInit } from '@angular/core';
import { ServGetService } from 'src/app/Service/ServGet/serv-get.service';

@Component({
  selector: 'app-dialog-ver-codigo',
  templateUrl: './dialog-ver-codigo.component.html',
  styleUrls: ['./dialog-ver-codigo.component.css']
})
export class DialogVerCodigoComponent implements OnInit {

  Codigo!:string;
  constructor(private ServGet:ServGetService) {
      ServGet.GetAllBD_IDUser("usuario",sessionStorage.getItem("ID_usuario")||"").subscribe((Datos:any)=>{
          this.Codigo=Datos[0].Codigo;
      });

   }

  ngOnInit(): void {
  }

}
