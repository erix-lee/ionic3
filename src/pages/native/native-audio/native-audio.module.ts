import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeAudioPage } from './native-audio';

@NgModule({
  declarations: [
    NativeAudioPage,
  ],
  imports: [
    IonicPageModule.forChild(NativeAudioPage),
  ],
})
export class NativeAudioPageModule {}
