import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import {user} from '../register/user'
import { LoginDetails } from '../LoginDetails';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
 
export class RegisterComponent implements OnInit {
 user_name:string;
  user_email:string;
  location:string;
  password:string;
  repeat_password:string;
  list:user[];
  obj =new user();
  obj2 = new LoginDetails();
 
  constructor(private router: Router,private http:HttpClient) { }
 
  ngOnInit() {
  }
  
  cancel(){
    this.router.navigate(['']);
  }
 
  signup(){
    if(this.password == this.repeat_password){
      console.log("equals");
      console.log(this.user_email);
      console.log(this.password);
 
      this.AddUser(this.user_name,this.user_email,this.location,this.password,this.repeat_password);
      
      
    }
    Swal.fire('Successfully Registered', '', 'success');
    this.router.navigate(['']);
  }
  AddUser( user_name:string,
    user_email:string,
    location:string,
    password:string,
    repeat_password:string){
      this.obj.user_name=user_name;
      this.obj.user_email=user_email;
      this.obj.location=location;
      this.obj.password=password;
      this.obj.repeat_password=repeat_password;
      //
      this.obj2.user_email=user_email;
      this.obj2.password=password;
      this.obj2.role="user";
      
      console.log(this.obj);
      this.http.post("http://localhost:49871/api/LoginDetails",this.obj2).subscribe(response=>{
        console.log(this.obj2);
      }
      );
      
      this.http.post("http://localhost:49871/api/Registration",this.obj).subscribe(response=>{
        console.log(this.obj);
      }
      );
  
  }
 
}