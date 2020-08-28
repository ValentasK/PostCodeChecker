import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {}

  getPostCodeData(postcode:string){
    return this.http.get<any>("https://api.postcodes.io/postcodes/"+postcode);    
  }

}
