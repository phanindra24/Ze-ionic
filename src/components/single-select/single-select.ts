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
  @Input() disabled:boolean = false;


  public selectedValue:string = '';
  public iconSource:string="";
  constructor() {
  }
  optionChange(value){
    this.iconSource=this.icons[value];
    this.onChange.emit(value);
  }

  ngAfterViewInit(){
    if (this.optionsArray && !this.disabled){
      this.selectedValue = this.optionsArray[0].value;
      this.onChange.emit(this.selectedValue);
    }else {
      this.iconSource = this.icons['default']
    }
  }

}
