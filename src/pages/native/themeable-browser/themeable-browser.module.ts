import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThemeableBrowserPage } from './themeable-browser';

@NgModule({
  declarations: [
    ThemeableBrowserPage,
  ],
  imports: [
    IonicPageModule.forChild(ThemeableBrowserPage),
  ],
})
export class ThemeableBrowserPageModule {}
