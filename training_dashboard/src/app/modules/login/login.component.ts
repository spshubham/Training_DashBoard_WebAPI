import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDetails } from '../LoginDetails';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  trainerList:LoginDetails[];

  public adminLogged: boolean;
  public userLogged: boolean;
  public trainerLogged: boolean;

  @Output() loginEvent = new EventEmitter();
  
  constructor(private loginservice: LoginService, private router: Router,private http:HttpClient) { 
   this.adminLogged = false;
   this.userLogged=false;
   this.trainerLogged=false;
   //this.loginservice.getMethod().subscribe( response => { this.trainerList = response } ) ;
    }
//   onLogin() {
//     this.loginservice.setName(this.username);
//     if(this.username && this.password){
//       //api
//       var postData= {
//         username: this.username,
//         password:this.password
//       }
//       this.loginservice.login(postData).subscribe((result)=>{
//         if(result){
          
//         }
//       })
//     }else{
//       alert('Please enter username or password')
//     }

//  }

   onLogin() {
     this.loginservice.setName(this.username);

     if((this.username == 'admin') && (this.password == 'admin'))
       {
        this.adminLogged = true;
        console.log(this.adminLogged);
        this.loginEvent.emit(this.adminLogged);
       this.router.navigate(['default']);
      }
      else if((this.username == 'trainer') && (this.password == '1234'))
      {
        this.http.get<any>('http://localhost:51868/api/loginDetails').subscribe(

          res =>{ 

            this.trainerList = res;

           // console.log(res);

       

        console.log(this.trainerList);



       // this.trainerList.forEach(element => {



       

       for(let element of this.trainerList){ 

        console.log(element);

          if((element.user_email == this.username) && (element.password == this.password) && (element.role == 'user')){

          

          console.log(element);

        console.log("hii");

        //this.trainerLogged=true;
        this.userLogged = true;


        this.router.navigate(['userdefault']);}
        
        

        }

      });
    
      }
      else{
        this.http.get<any>('http://localhost:49871/api/loginDetails').subscribe(

          res =>{ 

            this.trainerList = res;

           // console.log(res);

       

        console.log(this.trainerList);



       // this.trainerList.forEach(element => {



       

       for(let element of this.trainerList){ 

        console.log(element);

          if((element.user_email == this.username) && (element.password == this.password) && (element.role == 'user')){

          

          console.log(element);

        console.log("hii");

        //this.trainerLogged=true;
        this.userLogged = true;

        this.router.navigate(['userdefault']);}
        
        //  else{
        //    alert("Wrong UserName or Password");
        //    return;
        //  }
        

        }
        

      });
       //console.log(this.trainerList)
       // this.userLogged = true;
     //this.router.navigate(['userdefault']);
    }
 }
  // onLogin()
  // {
  //   this.loginservice.setName(this.username);
  //   const obj = {
  //     username: this.username,password:this.password
  //   }
  //   this.http.get("http://localhost:49871/api/Registration",{}).subscribe(response=>{
  //       console.log(response);
  //     }
  //     );

  // }

  register(){
    this.router.navigate(['register']);
  }

  ngOnInit(): void {
  }

}
