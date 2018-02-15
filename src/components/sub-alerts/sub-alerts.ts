import { Component, Input } from '@angular/core';

/**
 * Generated class for the SubAlertsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'sub-alerts',
  templateUrl: 'sub-alerts.html'
})
export class SubAlertsComponent {

  @Input() text:string;
  @Input() value: number;

  constructor() {
  }

}
