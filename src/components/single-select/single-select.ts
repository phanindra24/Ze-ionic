import {Component, EventEmitter, Input, Output} from '@angular/core';

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
  @Output() onChange = new EventEmitter<string>();


  public selectedValue:string = '';
  public iconSource:string="";
  constructor() {
  }
  optionChange(value) : void {
   console.log(value);
  console.log("here");
    console.log(this.icons);

this.iconSource=this.icons[value];
    console.log(this.iconSource);
    this.onChange.emit(value);

}

}
