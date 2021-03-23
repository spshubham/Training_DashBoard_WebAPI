import { Component, OnInit } from '@angular/core';


import { coursesDataService } from 'src/app/modules/courses/courses-data.service';
import { Courses } from '../../modules/courses/courses';
import { EnrollCourseService } from '../enroll-course.service';



@Component({
  selector: 'app-ongoing-courses',
  templateUrl: './ongoing-courses.component.html',
  styleUrls: ['./ongoing-courses.component.scss']
})
export class OngoingCoursesComponent implements OnInit {

  course: Courses[];
  Encourse: Courses;
  constructor(private courseservice: coursesDataService, private encourseService: EnrollCourseService) { 
    //this.course = courseservice.getCourses();
    this.courseservice.getCourses().subscribe( response => { this.course = response } ) ;
    console.log(this.course); 
    //console.log(this.course.toString());
  }

  ngOnInit() {
  }

 /* enroll(x:number){
    console.log("added")
    this.encourseService.enrollCourse(this.course[x-1]);
  }*/

  enroll(x:number){
    console.log("added")
    this.course.forEach( curr => {  //--------------------------------------------44
        if( curr.id == x )     
        {
          this.encourseService.enrollCourse( curr );
        }
    });
    
  }
}
