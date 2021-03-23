import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/shared/widgets/card/cards';
import { DashboardService } from '../dashboard.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
 /*  new_reg: number;
  ongoing_courses: number;
  active_users: number;
  idle_users: number; */

  /* card_data: card; */

  pieChart:any = [];
  barChart:any = [];
  donutChart: any=[];

  constructor(private dashboardService: DashboardService) { 
    /* this.card_data.new_registrations = this.dashboardService.new_reg();
    this.card_data.ongoing_courses = this.dashboardService.ongoing_trainings();
    this.card_data.active_users = this.dashboardService.active_users();
    this.card_data.active_users = this.dashboardService.idle_users(); */
  }

  ngOnInit() {
    
    this.pieChart = this.dashboardService.pieChart();
    this.barChart = this.dashboardService.barChart();
    this.donutChart = this.dashboardService.donutChart();

  }

}
