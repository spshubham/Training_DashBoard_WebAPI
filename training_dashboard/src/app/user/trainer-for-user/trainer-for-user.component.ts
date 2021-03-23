import { Component, OnInit } from '@angular/core';
import { trainer } from '../../modules/trainer-list/trainers';
import { TrainersDataService } from '../../modules/trainer-list/trainers-data.service';

@Component({
  selector: 'app-trainer-for-user',
  templateUrl: './trainer-for-user.component.html',
  styleUrls: ['./trainer-for-user.component.scss']
})
export class TrainerForUserComponent implements OnInit {

  trainers : trainer[]=[]
  constructor(private trainerService: TrainersDataService) { 
    this.trainers = this.trainerService.getTrainerList();
  }

  ngOnInit(): void {
  }

}
