import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AndroidFingerprintAuthPage } from './android-fingerprint-auth';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth';
@NgModule({
  declarations: [
    AndroidFingerprintAuthPage,
  ],
  imports: [
    IonicPageModule.forChild(AndroidFingerprintAuthPage),
  ],
  providers:[
    AndroidFingerprintAuth
  ]
})
export class AndroidFingerprintAuthPageModule {}
