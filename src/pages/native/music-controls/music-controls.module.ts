import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MusicControlsPage } from './music-controls';

@NgModule({
  declarations: [
    MusicControlsPage,
  ],
  imports: [
    IonicPageModule.forChild(MusicControlsPage),
  ],
})
export class MusicControlsPageModule {}
