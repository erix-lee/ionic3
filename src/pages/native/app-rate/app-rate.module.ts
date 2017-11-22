import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppRatePage } from './app-rate';
import { AppRate } from '@ionic-native/app-rate';
@NgModule({
  declarations: [
    AppRatePage,
  ],
  imports: [
    IonicPageModule.forChild(AppRatePage),
  ],
   providers: [AppRate]
})
export class AppRatePageModule { }
