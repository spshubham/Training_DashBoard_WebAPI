import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { swalProviderToken } from '@sweetalert2/ngx-sweetalert2/lib/di';
import { trainer } from '../trainer-list/trainers';
import { TrainersDataService } from '../trainer-list/trainers-data.service';

@Component({
  selector: 'app-trainer-add',
  templateUrl: './trainer-add.component.html',
  styleUrls: ['./trainer-add.component.scss']
})
export class TrainerAddComponent implements OnInit {

  tr: trainer;
  trainer_id: number;
  trainer_name:string;
  trainer_email: string;
  course_name: string;

  constructor( private dialogRef: MatDialogRef<TrainerAddComponent>, @Inject(MAT_DIALOG_DATA) private data: any, private trainerService: TrainersDataService)
  {
    
  }

  @HostListener('document:keyup.escape') onClose() {
    this.onCancel();
  }

  onCancel() {
    this.dialogRef.close();
  }

  onSubmit() {
    
    if(this.trainer_id,this.trainer_name, this.course_name,this.trainer_email)
    {
      console.log(this.trainer_name);
     // this.trainerService.addData(this.trainer_id,this.trainer_name, this.course_name,this.trainer_email);
      location.reload();
      this.dialogRef.close();
      location.reload();
    }
    else{
      alert("Please add all details");
    }
    
  }
  ngOnInit(): void {
  }

}
