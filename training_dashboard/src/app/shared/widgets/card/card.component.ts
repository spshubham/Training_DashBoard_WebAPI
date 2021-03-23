import { Component, OnInit, Input } from '@angular/core';
import { card } from './cards';
import { DashboardService } from '../../../modules/dashboard.service';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() {
   }

  ngOnInit() {
  }

}
