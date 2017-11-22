import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PinDialogPage } from './pin-dialog';

@NgModule({
  declarations: [
    PinDialogPage,
  ],
  imports: [
    IonicPageModule.forChild(PinDialogPage),
  ],
})
export class PinDialogPageModule {}
