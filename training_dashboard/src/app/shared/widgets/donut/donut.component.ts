import { Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-donut',
  templateUrl: './donut.component.html',
  styleUrls: ['./donut.component.scss']
})
export class DonutComponent implements OnInit {

  Highcharts = Highcharts;
  chartOptions = {};

  @Input() data = [];
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false
      },
      title: {
        text: 'Users from different<br> Locations',
        align: 'center',
        verticalAlign: 'middle',
        y: 60
      },
        tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      accessibility: {
        point: {
            valueSuffix: '%'
        }
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
            dataLabels: {
                enabled: true,
                distance: -50,
                style: {
                    fontWeight: 'bold',
                    color: 'white'
                }
            },
            startAngle: -90,
            endAngle: 90,
            center: ['50%', '75%'],
            size: '130%'
        }
    },
    series: [{
        type: 'pie',
        name: 'Geo-Diversity of Users',
        innerSize: '50%',
        data: this.data
      }]

    }
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 500)
  }

}
