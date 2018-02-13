import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import {DirectivesModule} from '../../directives/directives.module'
import { TabsPage } from './tabs';

@NgModule({
  declarations: [
    TabsPage,
  ],
  imports: [
    DirectivesModule,
    IonicPageModule.forChild(TabsPage),
    TranslateModule.forChild()
  ],
  exports: [
    TabsPage
  ]
})
export class TabsPageModule { }
