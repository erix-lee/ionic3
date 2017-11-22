import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PhonegapLocalNotificationPage } from './phonegap-local-notification';

@NgModule({
  declarations: [
    PhonegapLocalNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(PhonegapLocalNotificationPage),
  ],
})
export class PhonegapLocalNotificationPageModule {}
