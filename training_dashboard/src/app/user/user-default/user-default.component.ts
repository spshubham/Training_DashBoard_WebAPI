import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-default',
  templateUrl: './user-default.component.html',
  styleUrls: ['./user-default.component.scss']
})
export class UserDefaultComponent implements OnInit {

  sideBarOpen = true;
  constructor() { }

  ngOnInit() {
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }  

}
