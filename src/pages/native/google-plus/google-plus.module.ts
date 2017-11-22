import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GooglePlusPage } from './google-plus';

@NgModule({
  declarations: [
    GooglePlusPage,
  ],
  imports: [
    IonicPageModule.forChild(GooglePlusPage),
  ],
})
export class GooglePlusPageModule {}
