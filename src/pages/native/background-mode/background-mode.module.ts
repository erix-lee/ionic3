import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BackgroundModePage } from './background-mode';

@NgModule({
  declarations: [
    BackgroundModePage,
  ],
  imports: [
    IonicPageModule.forChild(BackgroundModePage),
  ],
})
export class BackgroundModePageModule {}
