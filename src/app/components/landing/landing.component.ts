import { Component,OnInit} from '@angular/core';
import { ServicesService } from 'src/app/services.service';
import { ActivatedRoute, ɵafterNextNavigation } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent {
  users:any;
  id = 0;
  user:any;
  //m=document.querySelector("#up")as HTMLElement;

  constructor(myRoute: ActivatedRoute,public Service:ServicesService){

         Service.getUsers().subscribe(
              {
                  next:(data)=>{
                 this.users=data;                            // getting all users details
                               },
                error:(err)=>{console.log(err)}
              }
  )  
  this.id = myRoute.snapshot.params["id"];
}

    ngOnInit(): void {
    this.Service.getUserById(this.id).subscribe(
      {
        next:(data)=>{
            
          this.user = data;

        },
        error:(err)=>{console.log(err)}
      }
    )
}
add(name:any,email:any,phone:any,city:any,street:any,suite:any){
 let address={city,street,suite}
 let  newStd={name,email,phone,address};
  this.Service.Add(newStd).subscribe(
    {
      next:()=>{
        this.users.push(newStd);
      },
      error:(err)=>{console.log(err)}
    }
  );
}
edit(id:number){
  this.Service.getUserById(id).subscribe(
    {
      next:(data)=>{
        this.user=data;
      },
      error:(err)=>{console.log(err)}
    }
  );
}

update(id:any,name:any,email:any,phone:any,city:any,street:any,suite:any) {
  let address={city,street,suite}
  let updatedU = {name,email,phone,address};
  this.Service.UpdateById(id,updatedU).subscribe(
    {
      next:()=>{
        this.users[id-1]=updatedU;
      },
      error:(err)=>{console.log(err)}
    }
  );  
}


del(id:any) {
    this.Service.delById(id).subscribe(
      data=>{
        this.Service.getUsers().subscribe((resp)=>{
          this.users=resp;
        });
      }
    );
    
}}
