import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchReviewPage } from './launch-review';

@NgModule({
  declarations: [
    LaunchReviewPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchReviewPage),
  ],
})
export class LaunchReviewPageModule {}
