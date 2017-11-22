import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppPreferencesPage } from './app-preferences';
import { AppPreferences } from '@ionic-native/app-preferences';
@NgModule({
  declarations: [
    AppPreferencesPage,
  ],
  imports: [
    IonicPageModule.forChild(AppPreferencesPage),
  ],
  providers:[AppPreferences]
})
export class AppPreferencesPageModule {}
