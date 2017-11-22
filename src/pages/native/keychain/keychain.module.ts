import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeychainPage } from './keychain';

@NgModule({
  declarations: [
    KeychainPage,
  ],
  imports: [
    IonicPageModule.forChild(KeychainPage),
  ],
})
export class KeychainPageModule {}
