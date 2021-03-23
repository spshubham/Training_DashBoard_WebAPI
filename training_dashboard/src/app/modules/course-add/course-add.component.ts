import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { coursesDataService } from '../courses/courses-data.service';

@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {

  course_id:number;
  course_name: string;
  trainer_name: string;
  start_date: string;
  end_date: string;
  
  constructor( private dialogRef: MatDialogRef<CourseAddComponent>, @Inject(MAT_DIALOG_DATA) private data: any, private courseService: coursesDataService )
  {
    
  }

  @HostListener('document:keyup.escape') onClose() {
    this.onCancel();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    
    if(this.course_id,this.course_name,this.trainer_name,this.start_date,this.end_date)
    {
      console.log(this.course_name);
      this.courseService.addData(this.course_id, this.course_name,this.trainer_name,this.start_date,this.end_date);
      location.reload();
      this.dialogRef.close();
    }
    else{
      alert("Please add all details");
    }
    
  }

  ngOnInit(): void {
  }

}
