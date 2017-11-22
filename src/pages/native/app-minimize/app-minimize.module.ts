import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppMinimizePage } from './app-minimize';
import { AppMinimize } from '@ionic-native/app-minimize';
@NgModule({
  declarations: [
    AppMinimizePage,
  ],
  imports: [
    IonicPageModule.forChild(AppMinimizePage),
  ],
  providers:[AppMinimize]
})
export class AppMinimizePageModule {}
