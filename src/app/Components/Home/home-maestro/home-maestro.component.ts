import { Component, OnInit } from '@angular/core';
import { ServGetService } from 'src/app/Service/ServGet/serv-get.service';

@Component({
  selector: 'app-home-maestro',
  templateUrl: './home-maestro.component.html',
  styleUrls: ['./home-maestro.component.css']
})
export class HomeMaestroComponent implements OnInit {

  GetData:any=[]
  constructor(ServGet:ServGetService) { 
    ServGet.GetAllBD_IDUser('materias',sessionStorage.getItem('ID_usuario')||'').subscribe(Data=>{
      this.GetData=Data;
    });
  }

  ngOnInit(): void {
  }

}
