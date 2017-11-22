import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MobileAccessibilityPage } from './mobile-accessibility';

@NgModule({
  declarations: [
    MobileAccessibilityPage,
  ],
  imports: [
    IonicPageModule.forChild(MobileAccessibilityPage),
  ],
})
export class MobileAccessibilityPageModule {}
