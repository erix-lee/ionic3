import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AndroidFullScreenPage } from './android-full-screen';

@NgModule({
  declarations: [
    AndroidFullScreenPage,
  ],
  imports: [
    IonicPageModule.forChild(AndroidFullScreenPage),
  ],
})
export class AndroidFullScreenPageModule {}
