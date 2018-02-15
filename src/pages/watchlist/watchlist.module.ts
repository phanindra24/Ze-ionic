import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WatchlistPage } from './watchlist';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    WatchlistPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(WatchlistPage),
  ],
})
export class WatchlistPageModule {}
