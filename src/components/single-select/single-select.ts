import { Component, Input } from '@angular/core';

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
  @Input() optionsArray:any;
  @Input() icons: any;

  public selectedValue:string = '';
  public iconSource:string="";
  constructor() {
  }
  onChange(value) : void {
   console.log(value);
  console.log("here");
    console.log(this.icons);

this.iconSource=this.icons[value];
    console.log(this.iconSource);
}

}
