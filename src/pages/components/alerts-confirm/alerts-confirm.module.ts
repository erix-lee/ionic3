import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertsConfirmPage } from './alerts-confirm';

@NgModule({
  declarations: [
    AlertsConfirmPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertsConfirmPage),
  ],
})
export class AlertsConfirmPageModule {}
