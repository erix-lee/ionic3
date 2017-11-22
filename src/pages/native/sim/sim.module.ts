import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SimPage } from './sim';

@NgModule({
  declarations: [
    SimPage,
  ],
  imports: [
    IonicPageModule.forChild(SimPage),
  ],
})
export class SimPageModule {}
