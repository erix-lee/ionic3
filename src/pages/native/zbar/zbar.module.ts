import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZbarPage } from './zbar';

@NgModule({
  declarations: [
    ZbarPage,
  ],
  imports: [
    IonicPageModule.forChild(ZbarPage),
  ],
})
export class ZbarPageModule {}
