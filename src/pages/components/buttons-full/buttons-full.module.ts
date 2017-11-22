import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsFullPage } from './buttons-full';

@NgModule({
  declarations: [
    ButtonsFullPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsFullPage),
  ],
})
export class ButtonsFullPageModule {}
