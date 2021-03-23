import { HttpClient } from '@angular/common/http';
import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { coursesComponent } from '../courses/courses.component';
import {Courses}from '../courses/courses'
import { TrainersDataService } from '../trainer-list/trainers-data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.scss']
})
export class CourseEditComponent implements OnInit {
  id:number;
    name:string;
    start_date : string;
    end_date : string;
    enrollments : number;
    instructor : string;
    image: string;
    DemoObj= new Courses();
    listx: Courses[];
    

  constructor(  private dialogRef: MatDialogRef<CourseEditComponent>, private http : HttpClient,@Inject(MAT_DIALOG_DATA) private data: any, private trainerService: TrainersDataService)
  { }
  
  ngOnInit(): void {
    this.getList();
  }

  @HostListener('document:keyup.escape') onClose() {
    this.onCancel();
  }
  getList(){
    console.log("Add component GET");
    this.http.get<any>('http://localhost:49871/api/course').subscribe(
      res => {
        console.log(this.listx.map);

        console.log(res);
        this.listx = res;
      });
  }

  onCancel() {
    console.log('Method not implemented.');
    this.dialogRef.close();

  }

  
  onSubmit() {
    
    if(this.id,this.name, this.start_date,this.end_date,this.enrollments,this.instructor)
    {
      console.log(this.id);
      this.image="/assets/images/general.png";
    
      this.addData(this.id,this.name, this.start_date,this.end_date,this.enrollments,this.instructor,this.image);
      this.dialogRef.close();
    }
    else{
      alert("Please add all details");
    }
    
  }
  addData(id_:number,name_:string,start_:string,end_:string,enroll_:number,instru_:string,img:string){
  //console.log("in Add data")  
   //console.log(id);

  this.DemoObj.id = id_;
  console.log(this.DemoObj.id)
  this.DemoObj.name = name_;
  this.DemoObj.start_date = start_;
  this.DemoObj.end_date = end_;
  this.DemoObj.enrollments=enroll_;
  this.DemoObj.instructor=instru_;
  this.DemoObj.image=img;
  console.log(this.DemoObj);
  console.log(this.DemoObj.image)
 this.http.put('http://localhost:49871/api/course/'+this.DemoObj.id,this.DemoObj).subscribe( 
   result => { 
     console.log(result)
     console.log(this.DemoObj.image)
      Swal.fire("Successfully Updated",'', 'success');
      location.reload(); 
      this.ngOnInit();
    });
    
  }


}
