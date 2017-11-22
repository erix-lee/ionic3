import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VideoEditorPage } from './video-editor';

@NgModule({
  declarations: [
    VideoEditorPage,
  ],
  imports: [
    IonicPageModule.forChild(VideoEditorPage),
  ],
})
export class VideoEditorPageModule {}
