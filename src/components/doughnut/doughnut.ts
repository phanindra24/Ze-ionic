import { Component, Input } from '@angular/core';
import * as HighCharts from 'highcharts';

/**
 * Generated class for the DoughnutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'doughnut',
  templateUrl: 'doughnut.html'
})
export class DoughnutComponent {

  colors: any;
  @Input() alertsLabel: string;
  @Input() remainingAlertsLabel: string;
  @Input() elementId: string;
  @Input() alertsCount: number;
  @Input() remainingAlertsCount: number;
  @Input() startAngle: number;
  @Input() isSelectedGraph: boolean;
  @Input() isGrayedGraph: boolean = false;
  @Input() isGrayedGraphLabel: boolean = false;


  constructor() {
  }

  ngOnInit() {
    this.colors = [];
    if (this.isGrayedGraph === false) {
      this.colors = ['#bbd6f2', '#f5f5f5']
    } else {
      this.colors = ['#E1ECF7', '#fbfbfb']
    }
  }

  ngAfterViewInit() {
    let self = this;
    HighCharts.chart(this.elementId, {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: 0,
        plotShadow: false,
        height: 160,
      },
      title: {
        text: this.alertsCount,
        align: 'center',
        verticalAlign: 'middle',
        y: 0,
        x: 0
      },
      tooltip: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        pie: {
          allowPointSelect: false,
          colors: this.colors,
          fillOpacity: 0.4,
          startAngle: this.startAngle,
          dataLabels: {
            enabled: false
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Alerts',
        innerSize: '85%',
        data: [
          [this.alertsLabel, Number(self.alertsCount)],
          [this.remainingAlertsLabel, Number(this.remainingAlertsCount)],
        ]
      }]
    });
  }
}
