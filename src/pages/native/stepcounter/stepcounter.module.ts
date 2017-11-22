import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StepcounterPage } from './stepcounter';

@NgModule({
  declarations: [
    StepcounterPage,
  ],
  imports: [
    IonicPageModule.forChild(StepcounterPage),
  ],
})
export class StepcounterPageModule {}
