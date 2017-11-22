import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpeechRecognitionPage } from './speech-recognition';

@NgModule({
  declarations: [
    SpeechRecognitionPage,
  ],
  imports: [
    IonicPageModule.forChild(SpeechRecognitionPage),
  ],
})
export class SpeechRecognitionPageModule {}
