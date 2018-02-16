import { Component, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Airtable } from '../../providers/providers';
import { DoughnutComponent } from '../../components/doughnut/doughnut';

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {

  @ViewChildren(DoughnutComponent) doughnuts:QueryList<DoughnutComponent>;

  drawGraph: boolean = false;
  
  currentAlertsData: any = {};

  alertsData: any = [{
    dateTime: "12",
    total: 177,
    unacknowledged: 10,
    process: {
      total: 127,
      drilling: 98,
      trippingOut: 27,
      trippingIn: 2
    },
    equipment: {
      total: 50,
      Maintainance: 50,
    }
  },
  {
    dateTime: "24",
    total: 300,
    unacknowledged: 20,
    process: {
      total: 200,
      drilling: 150,
      trippingOut: 50,
      trippingIn: 5
    },
    equipment: {
      total: 100,
      Maintainance: 100,
    }
  }
  ]



  public isTotalAlertsGraphSelected: boolean = true;

  timeSelectValuesMap: any = [
    { label: "Last 12H", value: "last12H" },
    { label: "Last 24H", value: "last24H" },
  ];

  constructor(public navCtrl: NavController, public airtable: Airtable) { }

  public selectGraph(graph: string) {
    this.isTotalAlertsGraphSelected = graph === 'process';
  }

  ionViewDidLoad() {
    this.airtable.getAlerts().subscribe(data => {
      console.log(data);
    })
    this.currentAlertsData = this.alertsData[0];
    this.drawGraph=true;

  }


  durationChange(value: string) {
    // this.drawGraph=false;
    console.log(value);
    // this.selectedDuration = (value === "last12H");
    this.currentAlertsData = (value === "last12H") ? this.alertsData[0] : this.alertsData[1];
    // this.drawGraph=false;
    // this.drawGraph=true;
    this.doughnuts.forEach(doughnut=>
    doughnut.redrawGraph()
    )
    // this.doughnuts[1].redrawGraph();
  }

}
