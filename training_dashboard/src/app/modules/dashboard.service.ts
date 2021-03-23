import { Injectable } from '@angular/core';
import { card } from '../shared/widgets/card/cards';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  card_data: card;
  constructor() { 
    /* this.card_data.new_registrations= 12;
    this.card_data.active_users=12;
    this.card_data.ongoing_courses=12;
    this.card_data.idle_users=12; */
  }

  /* new_reg() {
    
    return this.card_data.new_registrations ;
  }
  active_users() {
    
    return this.card_data.active_users;
  }
  ongoing_trainings() {
    
    return this.card_data.ongoing_courses;
  }
  idle_users() {
   
    return this.card_data.idle_users;
  } */

  pieChart() {
    return [{
      name: 'Blockchain',
      y: 11.8,
      sliced: true,
      selected: true
    }, {
      name: 'Microsoft Azure',
      y: 10.7
    }, {
      name: 'React',
      y: 7.06
    }, {
      name: 'Angular',
      y: 18.36
    }, {
      name: 'Java',
      y: 20.33
    }, {
      name: 'Git',
      y: 9.8
    },
     {
      name: 'HTML',
      y: 7.0
    }, {
      name: '.NET',
      y: 14.6,
      
    }];
  }

  barChart(){
    return [
      {name:'Blockchain',
        y: 42
      },

      {name:'Microsoft Azure',
        y: 38
      },
      {name:'React',
        y: 25
      },
      {name:'Angular',
        y: 65
      },
      {name:'Java',
        y: 72
      },
      {name:'Git',
        y: 35
      },
      {name:'HTML',
        y: 25
      },
      {name:'.NET',
      y: 48
      },
    ]
    
  }

  donutChart(){
    return [
      {name:'Pune',
      y: 30.9
      },
      {name:'Nagpur',
      y: 23.9
      },
      {name:'Bangalore',
      y: 12.9
      },
      {name:'Goa',
      y: 3.9
      },
      {
          name: 'Others',
          y: 7.61,
          dataLabels: {
              enabled: false
          }
      }
  ]
  }
}
