import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BatteryStatusPage } from './battery-status';

@NgModule({
  declarations: [
    BatteryStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(BatteryStatusPage),
  ],
})
export class BatteryStatusPageModule {}
