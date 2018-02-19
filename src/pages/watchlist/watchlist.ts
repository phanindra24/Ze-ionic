import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Airtable } from '../../providers/providers';

/**
 * Generated class for the WatchlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-watchlist',
  templateUrl: 'watchlist.html',
})
export class WatchlistPage {

  public timeOptionSelectedValue:string;
  public machineOptionSelectedValue:string;
  public unitOptionSelectedValue:string;
  watchlistData: any = [
    {
      metric: "WEIGHT - WEIGHT TIME",
      percentage: 100,
      rem: 0
    },
    {
      metric: "STAND DRILL TIME",
      percentage: 25,
      rem: 75
    }
  ];

  public icon2: string;
  public icon3: string;
  public timeOptionsArray: any = [
    { label: "12H", value: "Date1" },
    { label: "24H", value: "Date2" }
  ];

  public settingsOptions: any = [
    { label: "Process", value: "Process" },
    { label: "Equipment", value: "Equipment" }
  ];
  public typeOptions: any = [
    { label: "Drill", value: "Drill" },
    { label: "TD Speed", value: "TDSpeed" }
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams, public airtable: Airtable) {
  }
  ionViewDidLoad() {
    this.airtable.getWatchlist().subscribe(data => {
      console.log(data['records'])
      this.watchlistData[0].metric = data['records'][0].fields.Metric;
      this.watchlistData[0].percentage = data['records'][0].fields.Percentage;
      this.watchlistData[1].metric = data['records'][1].fields.Metric;
      this.watchlistData[1].percentage = data['records'][1].fields.Percentage;
      this.watchlistData[1].rem = 100 - this.watchlistData[1].percentage;
    })

  }
  timeSelectionChanged(value:string){
    this.timeOptionSelectedValue = value
  }

  machineSelectionChanged(value:string){
    this.machineOptionSelectedValue = value;
  }

  unitSelectionChanged(value:string){
    this.unitOptionSelectedValue = value
  }


}
