import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IbeaconPage } from './ibeacon';

@NgModule({
  declarations: [
    IbeaconPage,
  ],
  imports: [
    IonicPageModule.forChild(IbeaconPage),
  ],
})
export class IbeaconPageModule {}
