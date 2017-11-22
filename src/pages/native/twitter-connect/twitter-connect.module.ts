import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TwitterConnectPage } from './twitter-connect';

@NgModule({
  declarations: [
    TwitterConnectPage,
  ],
  imports: [
    IonicPageModule.forChild(TwitterConnectPage),
  ],
})
export class TwitterConnectPageModule {}
