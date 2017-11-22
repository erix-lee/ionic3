import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZeroconfPage } from './zeroconf';

@NgModule({
  declarations: [
    ZeroconfPage,
  ],
  imports: [
    IonicPageModule.forChild(ZeroconfPage),
  ],
})
export class ZeroconfPageModule {}
