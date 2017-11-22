import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FlurryAnalyticsPage } from './flurry-analytics';

@NgModule({
  declarations: [
    FlurryAnalyticsPage,
  ],
  imports: [
    IonicPageModule.forChild(FlurryAnalyticsPage),
  ],
})
export class FlurryAnalyticsPageModule {}
