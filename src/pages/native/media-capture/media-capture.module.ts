import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MediaCapturePage } from './media-capture';

@NgModule({
  declarations: [
    MediaCapturePage,
  ],
  imports: [
    IonicPageModule.forChild(MediaCapturePage),
  ],
})
export class MediaCapturePageModule {}
