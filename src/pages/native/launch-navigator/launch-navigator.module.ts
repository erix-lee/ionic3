import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchNavigatorPage } from './launch-navigator';

@NgModule({
  declarations: [
    LaunchNavigatorPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchNavigatorPage),
  ],
})
export class LaunchNavigatorPageModule {}
