import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AndroidFingerprintAuthPage } from './android-fingerprint-auth';

@NgModule({
  declarations: [
    AndroidFingerprintAuthPage,
  ],
  imports: [
    IonicPageModule.forChild(AndroidFingerprintAuthPage),
  ],
})
export class AndroidFingerprintAuthPageModule {}
