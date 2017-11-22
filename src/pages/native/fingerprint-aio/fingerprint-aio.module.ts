import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FingerprintAioPage } from './fingerprint-aio';

@NgModule({
  declarations: [
    FingerprintAioPage,
  ],
  imports: [
    IonicPageModule.forChild(FingerprintAioPage),
  ],
})
export class FingerprintAioPageModule {}
