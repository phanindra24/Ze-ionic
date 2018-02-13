import { Component } from '@angular/core';

/**
 * Generated class for the SingleSelectComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'single-select',
  templateUrl: 'single-select.html'
})
export class SingleSelectComponent {

  text: string;
  public valuesMap:any = [
    {label:"Last 12H", value:"last12H"},
    {label:"Last 24H", value:"last24H"},
    ];
  public selectedValue:string = '';

  constructor() {
    console.log('Hello SingleSelectComponent Component');
    this.text = 'Hello World';
  }

}
