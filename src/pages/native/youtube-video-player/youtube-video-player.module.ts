import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YoutubeVideoPlayerPage } from './youtube-video-player';

@NgModule({
  declarations: [
    YoutubeVideoPlayerPage,
  ],
  imports: [
    IonicPageModule.forChild(YoutubeVideoPlayerPage),
  ],
})
export class YoutubeVideoPlayerPageModule {}
