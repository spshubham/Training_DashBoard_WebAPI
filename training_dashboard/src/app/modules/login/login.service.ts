import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class LoginService {
    
    usernamesubject : Subject<string> = new Subject<string>();

    username: string;
    constructor(
        private http: HttpClient,
    ) { }
    
    getMethod(){
        return this.http.get<any>("http://localhost:49871/api/loginDetails").subscribe( response => {
            console.log("in get func");
        }) ;
    }


    login(postData:any) {
        return this.http.post<any>('',postData );
      }

    setName(name:string) {
        console.log("name is set and published: " + name);
        this.username = name;

        this.usernamesubject.next(this.username);
    }

    getName() {
        console.log("returning name" + this.username);
        return this.username;
    }

}