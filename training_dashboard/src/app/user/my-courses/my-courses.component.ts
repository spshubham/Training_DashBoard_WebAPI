import { Component, OnInit } from '@angular/core';
import { Courses } from '../../modules/courses/courses';
import { EnrollCourseService } from '../enroll-course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.scss']
})
export class MyCoursesComponent implements OnInit {

  enrolledCourses: Courses[]=[]
  constructor(private encourseService: EnrollCourseService, private router: Router) { 
    this.enrolledCourses = this.encourseService.getEnrolledCourses()
  }

  ngOnInit() {
  }

  /* gotoCourse(){
    console.log("Route to view")
    this.router.navigate(['view']);
  } */


}
