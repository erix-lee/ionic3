import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScreenOrientationPage } from './screen-orientation';

@NgModule({
  declarations: [
    ScreenOrientationPage,
  ],
  imports: [
    IonicPageModule.forChild(ScreenOrientationPage),
  ],
})
export class ScreenOrientationPageModule {}
