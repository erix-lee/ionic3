import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpinnerDialogPage } from './spinner-dialog';

@NgModule({
  declarations: [
    SpinnerDialogPage,
  ],
  imports: [
    IonicPageModule.forChild(SpinnerDialogPage),
  ],
})
export class SpinnerDialogPageModule {}
