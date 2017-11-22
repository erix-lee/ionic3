import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertsPromptPage } from './alerts-prompt';

@NgModule({
  declarations: [
    AlertsPromptPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertsPromptPage),
  ],
})
export class AlertsPromptPageModule {}
