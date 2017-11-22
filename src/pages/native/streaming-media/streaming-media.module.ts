import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StreamingMediaPage } from './streaming-media';

@NgModule({
  declarations: [
    StreamingMediaPage,
  ],
  imports: [
    IonicPageModule.forChild(StreamingMediaPage),
  ],
})
export class StreamingMediaPageModule {}
