import { Component, ViewChildren, QueryList } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Airtable } from '../../providers/providers';
import { DoughnutComponent } from '../../components/doughnut/doughnut';
import { Alert } from '../../models/alert';

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {

  @ViewChildren(DoughnutComponent) doughnuts: QueryList<DoughnutComponent>;

  drawGraph: boolean = false;

  currentAlertsData: any = {
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
      maintainance: 50,
    }
  };

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
      maintainance: 50,
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
      maintainance: 100,
    }
  }
  ]

  inputAlerts: Alert[];


  public isTotalAlertsGraphSelected: boolean = true;

  timeSelectValuesMap: any = [
    { label: "Last 12H", value: "last12H" },
    { label: "Last 24H", value: "last24H" },
  ];

  constructor(public navCtrl: NavController, public airtable: Airtable) {
    this.currentAlertsData = {
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
        maintainance: 50,
      }
    };

  }

  public selectGraph(graph: string) {
    this.isTotalAlertsGraphSelected = graph === 'PROCESS';
    this.doughnuts.forEach(doughnut =>
      doughnut.reColorGraph(graph)
    )
  }

  ionViewDidLoad() {
    this.airtable.getAlerts().subscribe(data => {
      this.inputAlerts = data['records'];

      var drillingProp = this.inputAlerts.find(o => o.fields["Name"] === 'Drilling');
      var trippingOutProp = this.inputAlerts.find(o => o.fields["Name"] === 'Tripping Out');
      var trippingInProp = this.inputAlerts.find(o => o.fields["Name"] === 'Tripping In');
      var equipFirstProp = this.inputAlerts.find(o => o.fields["Name"] === 'Placeholder 1');
      var equipSecondProp = this.inputAlerts.find(o => o.fields["Name"] === 'Placeholder 2');
      var equipThirdProp = this.inputAlerts.find(o => o.fields["Name"] === 'Placeholder 3');

      this.alertsData[0].process.drilling = drillingProp.fields["# of Alerts last 12 Hours"];
      this.alertsData[0].process.trippingOut = trippingOutProp.fields["# of Alerts last 12 Hours"];
      this.alertsData[0].process.trippingIn = trippingInProp.fields["# of Alerts last 12 Hours"];
      this.alertsData[0].process.total = this.alertsData[0].process.drilling + this.alertsData[0].process.trippingOut + this.alertsData[0].process.trippingIn;
      this.alertsData[0].equipment.maintainance = equipFirstProp.fields["# of Alerts last 12 Hours"];
      this.alertsData[0].equipment.total = this.alertsData[0].equipment.maintainance;
      this.alertsData[0].total = this.alertsData[0].process.total + this.alertsData[0].equipment.total;
      this.alertsData[0].unacknowledged = drillingProp.fields["# of Alerts unAcknowledged last 12 H"] + trippingOutProp.fields["# of Alerts unAcknowledged last 12 H"] + trippingInProp.fields["# of Alerts unAcknowledged last 12 H"];

      this.alertsData[1].process.drilling = drillingProp.fields["# of Alerts last 24 Hours"];
      this.alertsData[1].process.trippingOut = trippingOutProp.fields["# of Alerts last 24 Hours"];
      this.alertsData[1].process.trippingIn = trippingInProp.fields["# of Alerts last 24 Hours"];
      this.alertsData[1].process.total = this.alertsData[1].process.drilling + this.alertsData[1].process.trippingOut + this.alertsData[1].process.trippingIn;
      this.alertsData[1].equipment.maintainance = equipFirstProp.fields["# of Alerts last 24 Hours"];
      this.alertsData[1].equipment.total = this.alertsData[1].equipment.maintainance;
      this.alertsData[1].total = this.alertsData[1].process.total + this.alertsData[1].equipment.total;
      this.alertsData[1].unacknowledged = drillingProp.fields["# of Alerts unAcknowledged last 24 H"] + trippingOutProp.fields["# of Alerts unAcknowledged last 24 H"] + trippingInProp.fields["# of Alerts unAcknowledged last 24 H"];
      this.drawGraph = true;
    })
  }


  durationChange(value: string) {
    if (value === "last12H") {
      this.currentAlertsData = this.alertsData[0]
      this.doughnuts.forEach(doughnut =>
        doughnut.redrawGraph(this.alertsData[0])
      )
    } else {
      this.currentAlertsData = this.alertsData[1];
      this.doughnuts.forEach(doughnut =>
        doughnut.redrawGraph(this.alertsData[1])
      )
    }
  }

}
