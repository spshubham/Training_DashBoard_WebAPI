import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../modules/login/login.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {

  name:string;

  constructor(private loginservice: LoginService, private router: Router) {
    
    this.name = this.loginservice.getName();
   }

  ngOnInit() {
  }

}
