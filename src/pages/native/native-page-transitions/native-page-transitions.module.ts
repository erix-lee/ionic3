import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativePageTransitionsPage } from './native-page-transitions';

@NgModule({
  declarations: [
    NativePageTransitionsPage,
  ],
  imports: [
    IonicPageModule.forChild(NativePageTransitionsPage),
  ],
})
export class NativePageTransitionsPageModule {}
