import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrowserTabPage } from './browser-tab';

@NgModule({
  declarations: [
    BrowserTabPage,
  ],
  imports: [
    IonicPageModule.forChild(BrowserTabPage),
  ],
})
export class BrowserTabPageModule {}
