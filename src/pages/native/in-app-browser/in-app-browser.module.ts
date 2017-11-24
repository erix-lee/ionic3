import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InAppBrowserPage } from './in-app-browser';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@NgModule({
  declarations: [
    InAppBrowserPage,
  ],
  imports: [
    IonicPageModule.forChild(InAppBrowserPage),
  ],
  providers:[
    InAppBrowser
  ]
})
export class InAppBrowserPageModule {}
