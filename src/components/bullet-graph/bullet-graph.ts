import {Component, Input} from '@angular/core';

declare var Highcharts;

/**
 * Generated class for the BulletGraphComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bullet-graph',
  templateUrl: 'bullet-graph.html'
})
export class BulletGraphComponent {

  @Input() title: string;
  @Input() containerID:string;
  @Input() low:number;
  @Input() medium:number;
  @Input() high:number;
  @Input() current:number;
  @Input() optimal:number;

  constructor() {
  }

  ngAfterViewInit(){
    Highcharts.setOptions({
      chart: {
        inverted: false,
        marginLeft: 50,
        type: 'bullet'
      },
      title: {
        text: null
      },
      legend: {
        enabled: true,
        verticalAlign: 'bottom',
      },
      yAxis: {
        gridLineWidth: 0
      },
      plotOptions: {
        series: {
          pointPadding: 0.25,
          borderWidth: 0,
          color: '#000',
          targetOptions: {
            width: '200%',
            color: '#1991EB'
          }
        }
      },
      credits: {
        enabled: false
      },
      exporting: {
        enabled: false
      }
    });

    Highcharts.chart(this.containerID, {
      chart: {
        marginTop: 40
      },
      title: {
        enabled: false,
        text: null
      },
      xAxis: {
        categories: [this.title],
      },
      yAxis: {
        plotBands: [{
          from: 0,
          to: this.low,
          color: '#f2f2f2'
        }, {
          from: this.low,
          to: this.medium,
          color: '#d9d9d9'
        }, {
          from: this.medium,
          to: this.high,
          color: '#bfbfbf'
        }],
        title: null
      },
      series: [{
        data: [{
          y: this.current,
          target: this.optimal
        }]
      }],
      tooltip: {
        enabled: false
      }
    });
  }
}
