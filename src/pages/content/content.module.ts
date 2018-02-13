import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';
import { ComponentsModule } from '../../components/components.module'
import { ContentPage } from './content';
// import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    ContentPage,
  ],
  imports: [
    ComponentsModule,
    // CommonModule,
    IonicPageModule.forChild(ContentPage),
    TranslateModule.forChild()
  ],
  exports: [
    ContentPage
  ]
})
export class ContentPageModule { }
