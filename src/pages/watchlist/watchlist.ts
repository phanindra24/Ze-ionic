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

 
  public timeOptionsArray: any = [
    {label:"12H", value:"12H"},
    {label:"24H", value:"24H"}
    ];

  public settingsOptions:any = [
    {label:"12H", value:"12H"},
    {label:"24H", value:"24H"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


}
