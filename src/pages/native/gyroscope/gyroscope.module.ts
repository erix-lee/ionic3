import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GyroscopePage } from './gyroscope';

@NgModule({
  declarations: [
    GyroscopePage,
  ],
  imports: [
    IonicPageModule.forChild(GyroscopePage),
  ],
})
export class GyroscopePageModule {}
