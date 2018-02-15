import { NgModule } from '@angular/core';
import { DoughnutComponent } from './doughnut/doughnut';
import { SingleSelectComponent } from './single-select/single-select';
import { SubAlertsComponent } from './sub-alerts/sub-alerts';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { TimelineComponent } from './timeline/timeline';


@NgModule({
	declarations: [DoughnutComponent,
    SingleSelectComponent,
    SubAlertsComponent,
    TimelineComponent],
    imports: [CommonModule,
        IonicModule,
    ],
	exports: [DoughnutComponent,
    SingleSelectComponent,
    SubAlertsComponent,
    TimelineComponent]
})
export class ComponentsModule {}
