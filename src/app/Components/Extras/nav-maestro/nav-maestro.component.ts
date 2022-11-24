import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanvaAddMaterialComponent } from '../../NewMateria/canva-add-material/canva-add-material.component';

@Component({
  selector: 'app-nav-maestro',
  templateUrl: './nav-maestro.component.html',
  styleUrls: ['./nav-maestro.component.css']
})
export class NavMaestroComponent implements OnInit {

  constructor(public Dialog:MatDialog) { }

  ngOnInit(): void {
  }

  DialogOpen(){
    this.Dialog.open(CanvaAddMaterialComponent)
  }

}
