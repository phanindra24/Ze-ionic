import { NgModule } from '@angular/core';
import { DoughnutComponent } from './doughnut/doughnut';
import { SingleSelectComponent } from './single-select/single-select';
import { SubAlertsComponent } from './sub-alerts/sub-alerts';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';


@NgModule({
	declarations: [DoughnutComponent,
    SingleSelectComponent,
    SubAlertsComponent],
    imports: [CommonModule,
        IonicModule,
    ],
	exports: [DoughnutComponent,
    SingleSelectComponent,
    SubAlertsComponent]
})
export class ComponentsModule {}
