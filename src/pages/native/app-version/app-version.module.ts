import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppVersionPage } from './app-version';
import { AppVersion } from '@ionic-native/app-version';
@NgModule({
  declarations: [
    AppVersionPage,
  ],
  imports: [
    IonicPageModule.forChild(AppVersionPage),
  ],
  providers:[
    AppVersion
  ]
})
export class AppVersionPageModule {}
