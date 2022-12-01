import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServGetService {

  constructor(private http:HttpClient) {}

  GetAllBD(TB:string){
    return this.http.get('/API/VIRTUAL/GET/'+TB);
  }
  GetAllBD_IDUser(TB:string,ID:string){
    return this.http.get('/API/VIRTUAL/GET/'+TB+'/'+ID);
  }
}
