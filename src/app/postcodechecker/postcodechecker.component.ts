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
 postCodeInfo:any;


  ngOnInit(): void {
  }



  check(){
    this.data.getPostCodeData(this.postCode).subscribe(data => {
      this.postCodeInfo = data.status;
      console.log(this.postCodeInfo);
    });  
  }
  
  
  check2(){
    this.data.getPostCodeData(this.postCode).subscribe(data => {
      this.postCodeInfo.status = data.status;
      console.log(this.postCodeInfo);
    },
     errorResp=>{
       console.log(errorResp);
       console.log("batai");
      });
  }
}
