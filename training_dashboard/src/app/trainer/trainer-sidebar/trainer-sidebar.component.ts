import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/modules/login/login.service';

@Component({
  selector: 'app-trainer-sidebar',
  templateUrl: './trainer-sidebar.component.html',
  styleUrls: ['./trainer-sidebar.component.scss']
})
export class TrainerSidebarComponent implements OnInit {
  name: string;

  constructor(private loginservice: LoginService, private router: Router) {
    
    this.name = this.loginservice.getName();
   }

  ngOnInit() {
  }

}
