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
    {label:"12H", value:"Date1"},
    {label:"24H", value:"Date2"}
    ];

  public settingsOptions:any = [
    {label:"Equipment", value:"Equipment"},
    {label:"Process", value:"Process"}
  ];
  public typeOptions:any =[
    {label:"TD Speed", value:"TDSpeed"},
    {label:"Drill", value:"Drill"}

  ];
  processData: Item[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public airtable: Airtable) {
  }
  ionViewDidLoad() {
    this.airtable.getTimelineData().subscribe(data =>{
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
