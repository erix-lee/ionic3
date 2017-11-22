import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SafariViewControllerPage } from './safari-view-controller';

@NgModule({
  declarations: [
    SafariViewControllerPage,
  ],
  imports: [
    IonicPageModule.forChild(SafariViewControllerPage),
  ],
})
export class SafariViewControllerPageModule {}
