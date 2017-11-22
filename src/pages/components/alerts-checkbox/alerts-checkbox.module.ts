import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertsCheckboxPage } from './alerts-checkbox';

@NgModule({
  declarations: [
    AlertsCheckboxPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertsCheckboxPage),
  ],
})
export class AlertsCheckboxPageModule {}
