import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AndroidFullScreenPage } from './android-full-screen';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
@NgModule({
  declarations: [
    AndroidFullScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(AndroidFullScreenPage),
  ],
  providers:[
    AndroidFullScreen
  ]
})
export class AndroidFullScreenPageModule {}
