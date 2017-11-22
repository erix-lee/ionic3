import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeeplinksPage } from './deeplinks';

@NgModule({
  declarations: [
    DeeplinksPage,
  ],
  imports: [
    IonicPageModule.forChild(DeeplinksPage),
  ],
})
export class DeeplinksPageModule {}
