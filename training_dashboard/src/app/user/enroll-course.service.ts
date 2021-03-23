import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Courses } from '../modules/courses/courses';
import { coursesDataService } from 'src/app/modules/courses/courses-data.service';
@Injectable({providedIn: 'root'})
export class EnrollCourseService {

    enCourseList : Courses[] = []
    constructor( private courseService : coursesDataService ) {

     }

    //  enrollCourse(course : Courses)
    //  {
    //     if(this.enCourseList.indexOf(course) !== -1){
    //         Swal.fire('You have already enrolled for '+course.name+' course')
    //     } else{
    //         this.enCourseList.push(course);
    //         course.enrollments = course.enrollments + 1 ; //--------------------------41
    //         this.courseService.editCourse( course.id , course.name , course.instructor , course.start_date , course.end_date , course.enrollments,course.image ) ;// ----------------------------40
    //         Swal.fire('Thank you...', 'You have successfully enrolled in '+course.name+' course', 'success')
    //      }
    // }
    idx:Number;//---------------------------45
     enrollCourse(course : Courses)
     {
          
         this.idx = -1 ;//-------------------------46
        this.enCourseList.forEach( curr => {//------------------------------47
            if( curr.id == course.id )//-----------------------48
                this.idx = 1 ; //--------------------------------49
        });
        //if(this.enCourseList.indexOf(course) !== -1){//------------------------50
        if( this.idx == 1 ){  //-------------------------------51
            Swal.fire('You have already enrolled for '+course.name+' course')
        } else{
            this.enCourseList.push(course);
            course.enrollments = course.enrollments + 1 ; //--------------------------41
            Swal.fire('Thank you...', 'You have successfully enrolled in '+course.name+' course', 'success')
            this.courseService.editCourse( course.id , course.name , course.instructor , course.start_date , course.end_date , course.enrollments,course.image ) ;// ----------------------------40
             
        }
        // location.reload() ; //-------------------------42
    }
         


     getEnrolledCourses(){
         return this.enCourseList;
     }
    
}