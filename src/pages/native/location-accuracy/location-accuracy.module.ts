import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocationAccuracyPage } from './location-accuracy';

@NgModule({
  declarations: [
    LocationAccuracyPage,
  ],
  imports: [
    IonicPageModule.forChild(LocationAccuracyPage),
  ],
})
export class LocationAccuracyPageModule {}
