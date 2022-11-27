import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-canva-home',
  templateUrl: './canva-home.component.html',
  styleUrls: ['./canva-home.component.css']
})
export class CanvaHomeComponent implements OnInit {

  constructor(private _Router:Router) {
    if(!sessionStorage.getItem('ID_usuario'))this._Router.navigate(['Login']);
  }

  ngOnInit(): void {
  }

}
