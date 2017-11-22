import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GoogleAnalyticsPage } from './google-analytics';

@NgModule({
  declarations: [
    GoogleAnalyticsPage,
  ],
  imports: [
    IonicPageModule.forChild(GoogleAnalyticsPage),
  ],
})
export class GoogleAnalyticsPageModule {}
