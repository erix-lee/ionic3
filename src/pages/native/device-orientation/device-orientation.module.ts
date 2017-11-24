import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceOrientationPage } from './device-orientation';
import { DeviceOrientation } from '@ionic-native/device-orientation';
@NgModule({
  declarations: [
    DeviceOrientationPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceOrientationPage),
  ],
  providers:[
    DeviceOrientation
  ]
})
export class DeviceOrientationPageModule {}
