import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeychainTouchIdPage } from './keychain-touch-id';

@NgModule({
  declarations: [
    KeychainTouchIdPage,
  ],
  imports: [
    IonicPageModule.forChild(KeychainTouchIdPage),
  ],
})
export class KeychainTouchIdPageModule {}
