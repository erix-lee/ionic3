import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UidPage } from './uid';

@NgModule({
  declarations: [
    UidPage,
  ],
  imports: [
    IonicPageModule.forChild(UidPage),
  ],
})
export class UidPageModule {}
