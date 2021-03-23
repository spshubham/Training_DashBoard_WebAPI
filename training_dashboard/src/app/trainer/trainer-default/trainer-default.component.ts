import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-default',
  templateUrl: './trainer-default.component.html',
  styleUrls: ['./trainer-default.component.scss']
})
export class TrainerDefaultComponent implements OnInit {
  sideBarOpen: boolean;


  constructor() { 
    this.sideBarOpen= true;
  }

  ngOnInit() {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
