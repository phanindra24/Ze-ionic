import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {
  timeSelectValuesMap: any = [
    {label:"Last 12H", value:"last12H"},
    {label:"Last 24H", value:"last24H"},
  ];
  constructor(public navCtrl: NavController) { }

}
