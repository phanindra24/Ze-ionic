import { Component, Input } from '@angular/core';

declare var Highcharts;

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

  // redrawGraph: any;
  colors: any;
  chart: any;
  @Input() alertsLabel: string;
  @Input() remainingAlertsLabel: string;
  @Input() elementId: string;
  @Input() alertsCount: number;
  @Input() remainingAlertsCount: number;
  @Input() startAngle: number;
  @Input() isSelectedGraph: boolean;
  @Input() isGrayedGraph: boolean = false;
  @Input() isGrayedGraphLabel: boolean = false;
  // @Input() payload:any;


  constructor() {
  }

  grayedOutGraph() {
    this.colors = [];
    if (this.isGrayedGraph === false) {
      this.colors = ['#bbd6f2', '#f5f5f5']
      
    } else {
      this.colors = ['#E1ECF7', '#fbfbfb']
    }
  }

  ngOnInit() {
    this.grayedOutGraph();

  }

  ngOnChanges() {
    this.grayedOutGraph();
  }

  ngAfterViewInit() {
    this.drawGraph();

  }


  drawGraph() {
    this.chart = Highcharts.chart(this.elementId, {
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
        style:this.isSelectedGraph ?{fontWeight:'bold'}:{fontWeight:'normal'},
        y: 8,
        x: 1.5
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
          [this.alertsLabel, Number(this.alertsCount)],
          [this.remainingAlertsLabel, Number(this.remainingAlertsCount)],
        ]
      }]
    });
  }

  public redrawGraph(payload: any) {
    this.chart.update({
      title: {
        text: (this.alertsLabel === "PROCESS") ? payload.process.total : payload.equipment.total
      },
      series: [{
        type: 'pie',
        name: 'Alerts',
        innerSize: '85%',
        data: [
          [this.alertsLabel, Number((this.alertsLabel === "PROCESS") ? payload.process.total : payload.equipment.total)],
          [this.remainingAlertsLabel, Number((this.alertsLabel === "PROCESS") ? payload.equipment.total : payload.process.total)],
        ]
      }]
    })
  }

  public reColorGraph(type: string) {
    this.chart.update({
      title: {
        style:(type == this.alertsLabel) ?{fontWeight:'bold'}:{fontWeight:'normal'},
      },
      plotOptions: {
        pie: {
          colors: (type == this.alertsLabel) ? ['#bbd6f2', '#f5f5f5'] : ['#E1ECF7', '#fbfbfb'],
        }
      },
    })
  }
}
