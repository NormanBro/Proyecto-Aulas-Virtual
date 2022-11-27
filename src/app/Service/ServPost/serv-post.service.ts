import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServPostService {

  constructor(private http:HttpClient) { }

  PostAll(TB:string,Body:any){
    return this.http.post("/API/VIRTUAL/POST/"+TB,Body)
  }
  

}
