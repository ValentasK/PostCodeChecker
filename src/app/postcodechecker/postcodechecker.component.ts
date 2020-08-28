import { Component, OnInit } from '@angular/core';
import { ServiceService } from "../service.service";

@Component({
  selector: 'app-postcodechecker',
  templateUrl: './postcodechecker.component.html',
  styleUrls: ['./postcodechecker.component.css']
})
export class PostcodecheckerComponent implements OnInit {

  constructor(private data:ServiceService) { }

 postCode: string ;
 postCodeInfo: any;
 validPostCode: boolean;
 isItchecked: boolean = false;

  ngOnInit(): void {
  }

  
  check(){
    this.isItchecked = true;
    this.data.getPostCodeData(this.postCode).subscribe(data => {
     this.postCodeInfo = data;
      console.log("Post code found");
      this.validPostCode = true;
    },
     errorResp=>{
       console.log(errorResp);
       console.log("post code not found");
       this.validPostCode = false;
      });
  }
}

 // service   getPostCodeData(postcode:string){
 //   return this.http.get<any>("https://api.postcodes.io/postcodes/"+postcode);    
 // }