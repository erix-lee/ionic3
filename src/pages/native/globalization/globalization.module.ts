import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlobalizationPage } from './globalization';
import { Globalization } from '@ionic-native/globalization';
@NgModule({
  declarations: [
    GlobalizationPage,
  ],
  imports: [
    IonicPageModule.forChild(GlobalizationPage),
  ],
  providers:[
    Globalization
  ]
})
export class GlobalizationPageModule {}
