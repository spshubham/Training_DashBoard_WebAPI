import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Courses } from './courses';
import { coursesDataService } from './courses-data.service';
import { CourseAddComponent } from '../course-add/course-add.component';
import Swal from 'sweetalert2';
import { CourseEditComponent } from '../course-edit/course-edit.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class coursesComponent implements OnInit {

  courses2: any[];
  Courses:Courses[] = [];
  course_name: string;
  //course_id:number;

  constructor(private courseservice: coursesDataService, private dialog: MatDialog) { 
    //this.Courses = courseservice.getCourses();
    this.courseservice.getCourses().subscribe( response => { this.Courses = response } ) ;
  }
  ngOnInit() {
  }

  openModal() {
    const dialogRef =  this.dialog.open(CourseAddComponent, {data: {name: this.course_name}, disableClose: true});
    dialogRef.afterClosed().subscribe((submit) => {
      if (submit) {
        this.course_name = submit;
      } else {
        this.course_name = 'Nothing...';
      }
    })
   }

   edit_course(id:any) {
    const dialogRef =  this.dialog.open(CourseEditComponent, {data: {name: this.course_name}, disableClose: true});
    dialogRef.afterClosed().subscribe((submit) => {
      if (submit) {
        this.course_name = submit;
      } else {
        this.course_name = 'Nothing...';
      }
    })
   }

   delete_course(id:any){
     console.log(id);
    /* this.Courses.forEach( (item, index) => {
      if(item === id) this.Courses.splice(index,1);
    }); */
    Swal.fire({
      title: 'Are you sure you want to delete this course?',
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: `Yes`,
      denyButtonText: `No`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Deleted!', '', 'success')
        this.Courses.splice(id-1, 1);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
      location.reload();
    })
      this.courseservice.removeCourse( id ) ;//--------------------26
      
   }

}
