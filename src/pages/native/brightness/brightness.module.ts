import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrightnessPage } from './brightness';

@NgModule({
  declarations: [
    BrightnessPage,
  ],
  imports: [
    IonicPageModule.forChild(BrightnessPage),
  ],
})
export class BrightnessPageModule {}
