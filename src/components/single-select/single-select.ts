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
  @Input() iconName: string;
  @Output() onChange = new EventEmitter<string>();
  public selectedValue:string;

  constructor() {
  }

  selectChange(value){
    console.log(value);
    this.onChange.emit(value);
  }

  ngAfterViewInit(){
    this.selectedValue = this.optionsArray[0].value;
    this.onChange.emit(this.selectedValue);
  }

}
