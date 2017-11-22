import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppUpdatePage } from './app-update';
import { AppUpdate } from '@ionic-native/app-update';
@NgModule({
  declarations: [
    AppUpdatePage,
  ],
  imports: [
    IonicPageModule.forChild(AppUpdatePage),
  ],
  providers:[
    AppUpdate
  ]
})
export class AppUpdatePageModule {}
