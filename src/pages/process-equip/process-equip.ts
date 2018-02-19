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
    {label:"Process", value:"Process"},
    {label:"Equipment", value:"Equipment"}
  ];
  public typeOptions:any =[
    {label:"Drill", value:"Drill"},
    {label:"TD Speed", value:"TDSpeed"}
  ];
  processData: Item[];
  equipmentData:any={
    unit:"RPM",
    low:150,
    med:225,
    high:300,
    current:275,
    optimal:250
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public airtable: Airtable) {
  }
  ionViewDidLoad() {
    this.airtable.getTimelineData().subscribe(data =>{
      this.processData=data['records'];
    })
    this.airtable.getEquipmentMetric().subscribe(data =>{
      this.equipmentData.unit=data['records'][0].fields['Unit'];
      this.equipmentData.low=data['records'][0].fields['Low'];
      this.equipmentData.med=data['records'][0].fields['Medium'];
      this.equipmentData.high=data['records'][0].fields['High'];
      this.equipmentData.current=data['records'][0].fields['Current'];
      this.equipmentData.optimal=data['records'][0].fields['Optimal'];
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
