import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navegador',
  templateUrl: './navegador.component.html',
  styleUrls: ['./navegador.component.css']
})
export class NavegadorComponent implements OnInit {

  RolNav:any
  constructor(private _Router:Router) {
    this.RolNav=sessionStorage.getItem('Rol');
  }

  CerrarSession(){
    sessionStorage.removeItem('ID_usuario');
    sessionStorage.removeItem('Rol');
    this._Router.navigate(['Login']);
  }
  ngOnInit(): void {
  }

}
