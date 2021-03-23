import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];
   dataLables= [];
  
  constructor() { }

  ngOnInit() {
        this.chartOptions= {
            chart: {
                type: 'column'
            },
            title: {
                text: ''
            },
            
            xAxis: {
                type: 'category',
                title: {
                    text: 'Ongoing Trainings'
                },
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'No. of Enrollments'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'No. of students <b>{point.y}</b>'
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'No. of Enrollments',
                data: this.data,
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y}', 
                    y: 10, // 10 pixels down from the top
                    style: { 
                        fontSize: '13px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }],
            
    
                plotOptions: {
                    column: {
                        colorByPoint: true
                    }
                },
                colors: [
                    '#f58d42',
                    '#42d7f5',
                    '#42f581'
                ]
            
            
        }

        setTimeout(() => {
            window.dispatchEvent(
              new Event('resize')
            );
          }, 300)
    }

    
}