import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
   
 constructor(private readonly myClient:HttpClient) {}
 private readonly Base_URL="https://jsonplaceholder.typicode.com";
 getUsers(){
  return this.myClient.get(this.Base_URL+"/users");   //to get all users 
  }
  getUserById(id:any){
    return this.myClient.get(this.Base_URL+"/users/"+id);  //to get a specific user using his/her id
  }
  getAlbumsById(id:any){
    return this.myClient.get(this.Base_URL+"/users/"+id+"/albums");  //to get a specific user's album
  }
  getImgById(albumId:any){
    return this.myClient.get(this.Base_URL+"/albums/"+albumId+"/photos");// to get all photos of a specific album
  }
  delById(id:any){
    return this.myClient.delete(this.Base_URL+"/users/"+id); //deleting a user using their id
  }
  UpdateById(id: any, use:any) {
    return this.myClient.put(this.Base_URL + "/users/" + id, use) //updating a user using their id
  }
  Add(newuser:any){
    return this.myClient.post(this.Base_URL+"/users/",newuser);    //adding a new user
  }
  }