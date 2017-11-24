import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceMotionPage } from './device-motion';
import { DeviceMotion } from '@ionic-native/device-motion';
@NgModule({
  declarations: [
    DeviceMotionPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceMotionPage),
  ],
  providers:[
    DeviceMotion
  ]
})
export class DeviceMotionPageModule {}
