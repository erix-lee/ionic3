import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TapticEnginePage } from './taptic-engine';

@NgModule({
  declarations: [
    TapticEnginePage,
  ],
  imports: [
    IonicPageModule.forChild(TapticEnginePage),
  ],
})
export class TapticEnginePageModule {}
