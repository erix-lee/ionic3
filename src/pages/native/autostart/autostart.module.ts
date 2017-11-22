import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AutostartPage } from './autostart';
import { Autostart } from '@ionic-native/autostart';
@NgModule({
  declarations: [
    AutostartPage,
  ],
  imports: [
    IonicPageModule.forChild(AutostartPage),
  ],
  providers:[
    Autostart
  ]
})
export class AutostartPageModule {}
