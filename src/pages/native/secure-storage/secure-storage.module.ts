import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecureStoragePage } from './secure-storage';

@NgModule({
  declarations: [
    SecureStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(SecureStoragePage),
  ],
})
export class SecureStoragePageModule {}
