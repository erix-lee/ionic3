import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DialogsPage } from './dialogs';

@NgModule({
  declarations: [
    DialogsPage,
  ],
  imports: [
    IonicPageModule.forChild(DialogsPage),
  ],
})
export class DialogsPageModule {}
