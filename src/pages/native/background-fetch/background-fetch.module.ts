import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackgroundFetchPage } from './background-fetch';

@NgModule({
  declarations: [
    BackgroundFetchPage,
  ],
  imports: [
    IonicPageModule.forChild(BackgroundFetchPage),
  ],
})
export class BackgroundFetchPageModule {}
