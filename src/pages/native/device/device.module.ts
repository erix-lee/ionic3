import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevicePage } from './device';
import { Device } from '@ionic-native/device';
@NgModule({
  declarations: [
    DevicePage,
  ],
  imports: [
    IonicPageModule.forChild(DevicePage),
  ],
  providers:[
    Device
  ]
})
export class DevicePageModule {}
