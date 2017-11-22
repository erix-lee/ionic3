import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouchIdPage } from './touch-id';

@NgModule({
  declarations: [
    TouchIdPage,
  ],
  imports: [
    IonicPageModule.forChild(TouchIdPage),
  ],
})
export class TouchIdPageModule {}
