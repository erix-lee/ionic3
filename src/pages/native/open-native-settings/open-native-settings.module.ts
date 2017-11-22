import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenNativeSettingsPage } from './open-native-settings';

@NgModule({
  declarations: [
    OpenNativeSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenNativeSettingsPage),
  ],
})
export class OpenNativeSettingsPageModule {}
