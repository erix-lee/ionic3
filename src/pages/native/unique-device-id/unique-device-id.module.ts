import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UniqueDeviceIdPage } from './unique-device-id';

@NgModule({
  declarations: [
    UniqueDeviceIdPage,
  ],
  imports: [
    IonicPageModule.forChild(UniqueDeviceIdPage),
  ],
})
export class UniqueDeviceIdPageModule {}
