import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextToSpeechPage } from './text-to-speech';

@NgModule({
  declarations: [
    TextToSpeechPage,
  ],
  imports: [
    IonicPageModule.forChild(TextToSpeechPage),
  ],
})
export class TextToSpeechPageModule {}
