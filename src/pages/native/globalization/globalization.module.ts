import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GlobalizationPage } from './globalization';

@NgModule({
  declarations: [
    GlobalizationPage,
  ],
  imports: [
    IonicPageModule.forChild(GlobalizationPage),
  ],
})
export class GlobalizationPageModule {}
