import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InputsInlinePage } from './inputs-inline';

@NgModule({
  declarations: [
    InputsInlinePage,
  ],
  imports: [
    IonicPageModule.forChild(InputsInlinePage),
  ],
})
export class InputsInlinePageModule {}
