import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExtendedDeviceInformationPage } from './extended-device-information';

@NgModule({
  declarations: [
    ExtendedDeviceInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(ExtendedDeviceInformationPage),
  ],
})
export class ExtendedDeviceInformationPageModule {}
