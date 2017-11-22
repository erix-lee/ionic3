import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ButtonsComponentsPage } from './buttons-components';

@NgModule({
  declarations: [
    ButtonsComponentsPage,
  ],
  imports: [
    IonicPageModule.forChild(ButtonsComponentsPage),
  ],
})
export class ButtonsComponentsPageModule {}
