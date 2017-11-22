import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EstimoteBeaconsPage } from './estimote-beacons';

@NgModule({
  declarations: [
    EstimoteBeaconsPage,
  ],
  imports: [
    IonicPageModule.forChild(EstimoteBeaconsPage),
  ],
})
export class EstimoteBeaconsPageModule {}
