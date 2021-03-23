import { Component, OnInit } from '@angular/core';
import { trainer } from './trainers';
import { TrainersDataService } from './trainers-data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
import { TrainerAddComponent } from '../trainer-add/trainer-add.component';


@Component({
  selector: 'app-trainer-list',
  templateUrl: './trainer-list.component.html',
  styleUrls: ['./trainer-list.component.scss']
})
export class TrainerListComponent implements OnInit {

  trainer_name: string;
  isOpen:boolean = false;
  trainers: trainer[]=[]
  constructor(private service: TrainersDataService, private router: Router, private dialog: MatDialog) { 
    this.trainers = this.service.getTrainerList()
  }

  ngOnInit() {
    
  }


  openModal() {
    const dialogRef =  this.dialog.open(TrainerAddComponent, {data: {name: this.trainer_name}, disableClose: true});
    dialogRef.afterClosed().subscribe((submit) => {
      if (submit) {
        this.trainer_name = submit;
      } else {
        this.trainer_name = 'Nothing...';
      }
    })
   }
  
   delete_trainer(id:any){
    console.log(id);
   /* this.Courses.forEach( (item, index) => {
     if(item === id) this.Courses.splice(index,1);
   }); */
   Swal.fire({
     title: 'Are you sure you want to delete this trainer?',
     showDenyButton: false,
     showCancelButton: true,
     confirmButtonText: `Yes`,
     denyButtonText: `No`,
   }).then((result) => {
     /* Read more about isConfirmed, isDenied below */
     if (result.isConfirmed) {
       Swal.fire('Deleted!', '', 'success')
       this.trainers.splice(id-1, 1);
     } else if (result.isDenied) {
       Swal.fire('Changes are not saved', '', 'info')
     }
   })
   
  }
}
