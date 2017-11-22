import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedometerPage } from './pedometer';

@NgModule({
  declarations: [
    PedometerPage,
  ],
  imports: [
    IonicPageModule.forChild(PedometerPage),
  ],
})
export class PedometerPageModule {}
