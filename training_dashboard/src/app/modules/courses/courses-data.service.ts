import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Courses } from './courses';

import { HttpClient, HttpClientModule } from '@angular/common/http' ;//----------------3
import { Observable, observable } from 'rxjs' ; //--------------------4

@Injectable({providedIn: 'root'})
export class coursesDataService {
    readonly APIUrl = "http://localhost:49871/api" ; //-----------------5
    course : Courses[] = [];
    currcourse : Courses ={ //------------------------------------11
         id : 0,
         name : "",
         instructor : "" , 
         enrollments : 0 ,
         start_date : "" ,
         end_date : "",
         image : ""
    }
    image:string;
    no_of_enrollments: number;
    constructor( private http: HttpClient ) { //--------------------6
        //7
        // this.course.push(new Courses(1, 'Blockchain','Pallavi Jog    ', '04-01-21', '15-01-21', 42,"./assets/images/blockchain.jpg"));
        // this.course.push(new Courses(2, 'Microsoft Azure', 'Sameera Deo','05-01-21', '16-01-21', 38,"./assets/images/azure.jpg"));
        // this.course.push(new Courses(3, 'React','Bharti Thorat', '01-01-21', '12-01-21', 25,"./assets/images/react.jpg"));
        // this.course.push(new Courses(4, 'Angular', 'Mukta Peshave','04-01-21', '18-01-21', 65,"./assets/images/angular.png"));
        // this.course.push(new Courses(5, 'Java', 'Kedar Tokekar','10-01-21', '25-01-21', 72,"./assets/images/java.png"));
        // this.course.push(new Courses(6, 'Git', 'Subrahmanyam','25-01-21', '30-01-21', 35,"./assets/images/git.png"));
        // this.course.push(new Courses(7, 'HTML', 'Abhijeet Gole','20-01-21', '30-01-21', 25,"./assets/images/html.png"));
        // this.course.push(new Courses(8, '.NET', 'Archana Ghatigar','15-01-21', '30-01-21', 48,"./assets/images/dotnet.png"));
     
        
    }
    
     getCourses():Observable<any[]>{ //------------8
         //return this.course; ------------8
        return this.http.get<any[]>( this.APIUrl + '/Course' ) ;//-----------9 
     }

     addData(id:number,course_name:string,trainer_name:string,start_date:string,end_date:string){
        //let image = course_name; -------------12
       //let no_of_enrollments= 0;  ------------13
        //this.course.push(new Courses(id, course_name, trainer_name,start_date,end_date,no_of_enrollments,image )); --------------------- 10
        console.log(this.currcourse) ; //----------21 
        this.currcourse.id = id ;//---------------------14
        this.currcourse.name = course_name ;//--------------15
        this.currcourse.instructor = trainer_name ;//----------16
        this.currcourse.start_date = start_date ;//--------------17
        this.currcourse.end_date = end_date ; //------------------18
        this.currcourse.enrollments = 0 ; //----------------------19
        this.currcourse.image = "./assets/images/general.png";//-------------24
        //if( course_name)
        //this.image
        Swal.fire("Successfully Added",'', 'success');
        //-------------22
        this.http.post(this.APIUrl+'/Course', this.currcourse).subscribe( response => {//-------25
            console.log(this.currcourse); //-----------------------23
        } ) ; //-------------20
        this.getCourses() ;//-----------------------------30
        
    }

     removeCourse(doc:any){//-------------------------27
        //this.course.forEach( (item, index) => {
          //if(item === doc) this.course.splice(index,1);
        //});
        this.http.delete( this.APIUrl+'/Course/' + doc ).subscribe( response => {//----------------28
            console.log(doc + " id deleted successfully") ; //------------------------29
        }) ;
        this.getCourses() ;//----------------------31
     } 

     editCourse(id:number,course_name:string,trainer_name:string,start_date:string,end_date:string,enrollments:number,img:string){//--------32
        console.log(this.currcourse) ; //----------33 
        this.currcourse.id = id ;//---------------------34
        this.currcourse.name = course_name ;//--------------35
        this.currcourse.instructor = trainer_name ;//----------36
        this.currcourse.start_date = start_date ;//--------------37
        this.currcourse.end_date = end_date ; //------------------38
        this.currcourse.enrollments = enrollments ; //----------------------39
        this.currcourse.image=img;
         this.http.put( this.APIUrl+'/Course' , this.currcourse ).subscribe( response => {//-----------40
             console.log( this.currcourse ) ; 
         })
     }
}