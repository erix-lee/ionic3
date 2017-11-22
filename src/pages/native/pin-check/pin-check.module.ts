import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinCheckPage } from './pin-check';

@NgModule({
  declarations: [
    PinCheckPage,
  ],
  imports: [
    IonicPageModule.forChild(PinCheckPage),
  ],
})
export class PinCheckPageModule {}
