import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckboxesPage } from './checkboxes';

@NgModule({
  declarations: [
    CheckboxesPage,
  ],
  imports: [
    IonicPageModule.forChild(CheckboxesPage),
  ],
})
export class CheckboxesPageModule {}
