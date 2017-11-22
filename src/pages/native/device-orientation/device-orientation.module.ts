import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceOrientationPage } from './device-orientation';

@NgModule({
  declarations: [
    DeviceOrientationPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceOrientationPage),
  ],
})
export class DeviceOrientationPageModule {}
