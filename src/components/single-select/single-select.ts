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
  @Input() iconName: string;
  public selectedValue:string = '';

  constructor() {
  }


}
