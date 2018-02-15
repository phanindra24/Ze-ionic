import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html'
})
export class AlertsPage {
  public timeSelectValuesMap: any = [
    {label:"Last 12H", value:"Date1"},
    {label:"Last 24H", value:"Date2"},
  ];
  constructor(public navCtrl: NavController) { }

}
