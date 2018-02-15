import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

 public icon2: string;
  public icon3: string;
  public timeOptionsArray: any = [
    {label:"12H", value:"Date1"},
    {label:"24H", value:"Date2"}
    ];

  public settingsOptions:any = [
    {label:"Process", value:"Process"},
    {label:"Equipment", value:"Equipment"}
  ];
  public typeOptions:any =[
    {label:"Drill", value:"Drill"},
    {label:"TD Speed", value:"TDSpeed"}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 onChangeCol2(value) : void {
   console.log('Course Value',value)
}
 onChangeCol3(value) : void {
   console.log('Course Value',value)
}

}
