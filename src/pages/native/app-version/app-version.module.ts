import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppVersionPage } from './app-version';

@NgModule({
  declarations: [
    AppVersionPage,
  ],
  imports: [
    IonicPageModule.forChild(AppVersionPage),
  ],
})
export class AppVersionPageModule {}
