import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Airtable } from '../../providers/providers';
/**
 * Generated class for the ProcessEquipPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-process-equip',
  templateUrl: 'process-equip.html',
})
export class ProcessEquipPage {
  processData: Item[];
  // public processData:any =[
  //   {
  //     date:"date",
  //     time:"time",
  //     event:"myevent",
  //   },
  //   {
  //     date:"date",
  //     time:"time",
  //     event:"myevent",
  //   },
  //   {
  //     date:"date",
  //     time:"time",
  //     event:"myevent",
  //   },
  //   {
  //     date:"date",
  //     time:"time",
  //     event:"myevent",
  //   },
  //   {
  //     date:"date",
  //     time:"time",
  //     event:"myevent",
  //   },
  //   {
  //     date:"date",
  //     time:"time",
  //     event:"myevent",
  //   },
  //   {
  //     date:"date",
  //     time:"time",
  //     event:"myevent",
  //   }
  // ]

  constructor(public navCtrl: NavController, public navParams: NavParams, public airtable: Airtable) {
  }

  ionViewDidLoad() {
    this.airtable.query().subscribe(data => 
      this.processData=data['records'])
    // console.log(data));
  }

}
