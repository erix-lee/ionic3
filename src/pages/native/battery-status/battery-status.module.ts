import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BatteryStatusPage } from './battery-status';
import { BatteryStatus } from '@ionic-native/battery-status';
@NgModule({
  declarations: [
    BatteryStatusPage,
  ],
  imports: [
    IonicPageModule.forChild(BatteryStatusPage),
  ],
  providers:[
    BatteryStatus
  ]
})
export class BatteryStatusPageModule {}
