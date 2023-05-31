import { Component,OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
 albums:any;
 users:any;
 ph:any;
  id:any;
  count=0;
constructor(myRoute:ActivatedRoute,public service:ServicesService){
  //service.getUsers().subscribe(
  //  {
       // next:(data)=>{
      // this.albums=data;                            // getting all albums
                   //  },
      //error:(err)=>{console.log(err)}
  //  }
//)
  this.id = myRoute.snapshot.params["id"];

}
ngOnInit(): void {
  this.service.getUserById(this.id).subscribe(
    {
      next:(data)=>{
                                                          //getting users details
        this.users = data;
      },
      error:(err)=>{console.log(err)}
    }
  )
  this.service.getAlbumsById(this.id).subscribe(
    {
      next:(data)=>{
        this.albums = data;
      },                                              ///getting users albums
      error:(err)=>{console.log(err)}
    }
  )

  this.service.getImgById(this.id).subscribe(
    {
      next:(data)=>{
        this.ph = data;
        for(let i=0;i<this.ph.length;i++){
          this.count=this.count+1;
        }                                             //counting number of photos in an album
      },
      error:(err)=>{console.log(err)}
    }

  )
}
}


