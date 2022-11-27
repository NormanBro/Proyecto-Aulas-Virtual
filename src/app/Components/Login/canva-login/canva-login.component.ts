import { Component, OnInit } from '@angular/core';
import { ServGetService } from 'src/app/Service/ServGet/serv-get.service';

@Component({
  selector: 'app-canva-login',
  templateUrl: './canva-login.component.html',
  styleUrls: ['./canva-login.component.css']
})
export class CanvaLoginComponent implements OnInit {

  public GetData:any=[]
  constructor(private ServGet:ServGetService) { }

  ngOnInit(): void {
    this.ServGet.GetAllBD('usuario').subscribe(Data=>{
      this.GetData=Data
    })
    
  }

}
