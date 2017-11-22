import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ScreenshotPage } from './screenshot';

@NgModule({
  declarations: [
    ScreenshotPage,
  ],
  imports: [
    IonicPageModule.forChild(ScreenshotPage),
  ],
})
export class ScreenshotPageModule {}
