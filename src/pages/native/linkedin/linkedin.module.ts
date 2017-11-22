import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LinkedinPage } from './linkedin';

@NgModule({
  declarations: [
    LinkedinPage,
  ],
  imports: [
    IonicPageModule.forChild(LinkedinPage),
  ],
})
export class LinkedinPageModule {}
