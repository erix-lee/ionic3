import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppPreferencesPage } from './app-preferences';

@NgModule({
  declarations: [
    AppPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(AppPreferencesPage),
  ],
})
export class AppPreferencesPageModule {}
