import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  public processData:any =[
    {
      date:"date",
      time:"time",
      event:"myevent",
    },
    {
      date:"date",
      time:"time",
      event:"myevent",
    },
    {
      date:"date",
      time:"time",
      event:"myevent",
    },
    {
      date:"date",
      time:"time",
      event:"myevent",
    },
    {
      date:"date",
      time:"time",
      event:"myevent",
    },
    {
      date:"date",
      time:"time",
      event:"myevent",
    },
    {
      date:"date",
      time:"time",
      event:"myevent",
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProcessEquipPage');
  }

}
