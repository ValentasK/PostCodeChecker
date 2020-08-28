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
 postCodeInfo:string;

  ngOnInit(): void {
  }



  check(){
    this.data.getPostCodeData(this.postCode).subscribe(data => {
      this.postCodeInfo = data.status;
      console.log(this.postCodeInfo);
    });

     //// 
    
  }
  

}
