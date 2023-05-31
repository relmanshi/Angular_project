import { Component, OnInit} from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements OnInit{
  albums:any;
  users:any;
  ph:any;
   id:any;
   Aid:any;
constructor(myRoute:ActivatedRoute,public service:ServicesService){
  this.id = myRoute.snapshot.params["id"];
  this.Aid= myRoute.snapshot.params["albumId"];
}
ngOnInit(): void {
  this.service.getUserById(this.id).subscribe(
    {
      next:(data)=>{
 
        this.users = data;                                        //getting users details
      },
      error:(err)=>{console.log(err)}
    }
  )
 // this.service.getAlbumsById(this.id).subscribe(
   // {
      //next:(data)=>{
 
      //  this.albums = data;
     // },                                                              //getting the album
     // error:(err)=>{console.log(err)}
   // }
 // )
  this.service.getImgById(this.Aid).subscribe(
    {
      next:(data)=>{
        this.ph = data;
      },
      error:(err)=>{console.log(err)}
    }

  )
}

}
