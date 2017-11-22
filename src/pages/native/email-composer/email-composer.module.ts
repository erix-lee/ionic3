import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmailComposerPage } from './email-composer';

@NgModule({
  declarations: [
    EmailComposerPage,
  ],
  imports: [
    IonicPageModule.forChild(EmailComposerPage),
  ],
})
export class EmailComposerPageModule {}
