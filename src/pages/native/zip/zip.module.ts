import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZipPage } from './zip';

@NgModule({
  declarations: [
    ZipPage,
  ],
  imports: [
    IonicPageModule.forChild(ZipPage),
  ],
})
export class ZipPageModule {}
