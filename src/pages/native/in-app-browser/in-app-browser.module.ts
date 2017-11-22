import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InAppBrowserPage } from './in-app-browser';

@NgModule({
  declarations: [
    InAppBrowserPage,
  ],
  imports: [
    IonicPageModule.forChild(InAppBrowserPage),
  ],
})
export class InAppBrowserPageModule {}
