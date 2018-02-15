import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProcessEquipPage } from './process-equip';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    ProcessEquipPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(ProcessEquipPage),
  ],
})
export class ProcessEquipPageModule {}
