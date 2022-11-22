import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAccesoAulaComponent } from '../Dialogos/dialog-acceso-aula/dialog-acceso-aula.component';

@Component({
  selector: 'app-nav-estudiante',
  templateUrl: './nav-estudiante.component.html',
  styleUrls: ['./nav-estudiante.component.css']
})
export class NavEstudianteComponent implements OnInit {

  constructor(public Dialog:MatDialog) { }

  OpenDialog(){
    this.Dialog.open(DialogAccesoAulaComponent);
  }
  ngOnInit(): void {
  }

}
