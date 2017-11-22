import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceMotionPage } from './device-motion';

@NgModule({
  declarations: [
    DeviceMotionPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceMotionPage),
  ],
})
export class DeviceMotionPageModule {}
