import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SerialPage } from './serial';

@NgModule({
  declarations: [
    SerialPage,
  ],
  imports: [
    IonicPageModule.forChild(SerialPage),
  ],
})
export class SerialPageModule {}
