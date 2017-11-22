import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppAvailabilityPage } from './app-availability';
import { AppAvailability } from '@ionic-native/app-availability';
@NgModule({
  declarations: [
    AppAvailabilityPage,
  ],
  imports: [
    IonicPageModule.forChild(AppAvailabilityPage),
  ],
  providers:[AppAvailability]
})
export class AppAvailabilityPageModule {}
