import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-canva-register',
  templateUrl: './canva-register.component.html',
  styleUrls: ['./canva-register.component.css']
})
export class CanvaRegisterComponent implements OnInit {

  constructor(private _Router:Router) {
    if(sessionStorage.getItem('ID_usuario'))this._Router.navigate(['Home']);
   }

  ngOnInit(): void {
  }

}
