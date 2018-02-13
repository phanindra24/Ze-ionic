import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module';
import { AlertsPage } from './alerts';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AlertsPage,
  ],
  imports: [
    ComponentsModule,
    // CommonModule,
    IonicPageModule.forChild(AlertsPage),
    TranslateModule.forChild()
  ],
  exports: [
    AlertsPage
  ]
})
export class AlertsPageModule { }
