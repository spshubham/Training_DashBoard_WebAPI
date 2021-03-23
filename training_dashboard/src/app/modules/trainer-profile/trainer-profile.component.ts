import { Component, Input, OnInit } from '@angular/core';
import { TrainersDataService } from '../trainer-list/trainers-data.service';
import { trainer } from '../trainer-list/trainers';
import { MatDialog } from '@angular/material/dialog';
import { TrainerAddComponent } from '../trainer-add/trainer-add.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.scss']
})
export class TrainerProfileComponent implements OnInit {

  trainers: trainer[]=[];
  trainer_name: string;


  constructor(private trainerService: TrainersDataService, private dialog: MatDialog ) { 
    this.trainers = this.trainerService.getTrainerList();
  }

  checkforlogin(islogged: boolean){
    console.log(islogged);
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

  ngOnInit(): void {
  }

}
