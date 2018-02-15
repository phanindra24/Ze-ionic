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

  public timeOptionSelectedValue:string;
  public machineOptionSelectedValue:string;
  public unitOptionSelectedValue:string;

  public timeOptionsArray: any = [
    {label:"12H", value:"12H"},
    {label:"24H", value:"24H"}
  ];

  public machineOptions:any = [
    {label:"Process", value:"process"},
    {label:"Equipment", value:"equipment"}
  ];

  public unitOptions:any = [
    {label:"Drilling", value:"drilling"},
    {label:"TD Speed", value:"tdSpeed"}
  ];

  processData: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public airtable: Airtable) {
  }

  ionViewDidLoad() {
    this.airtable.query().subscribe(data =>{
      this.processData=data['records'];
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
