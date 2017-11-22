import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackgroundFetchPage } from './background-fetch';
import { BackgroundFetch } from '@ionic-native/background-fetch';
@NgModule({
  declarations: [
    BackgroundFetchPage,
  ],
  imports: [
    IonicPageModule.forChild(BackgroundFetchPage),
  ],
  providers:[
    BackgroundFetch
  ]
})
export class BackgroundFetchPageModule {}
