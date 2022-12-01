import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServGetService } from 'src/app/Service/ServGet/serv-get.service';

@Component({
  selector: 'app-canva-home',
  templateUrl: './canva-home.component.html',
  styleUrls: ['./canva-home.component.css']
})
export class CanvaHomeComponent implements OnInit {

  DatosUnion:any=[]
  RolNav:any;
  
  constructor(private _Router:Router) {
    if(!sessionStorage.getItem('ID_usuario'))this._Router.navigate(['Login']);
    this.RolNav=sessionStorage.getItem('Rol');

    
    

  }
  

  ngOnInit(): void {
  }

}
