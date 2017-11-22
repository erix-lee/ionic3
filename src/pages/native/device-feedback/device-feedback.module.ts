import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceFeedbackPage } from './device-feedback';

@NgModule({
  declarations: [
    DeviceFeedbackPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceFeedbackPage),
  ],
})
export class DeviceFeedbackPageModule {}
