import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NativeStoragePage } from './native-storage';

@NgModule({
  declarations: [
    NativeStoragePage,
  ],
  imports: [
    IonicPageModule.forChild(NativeStoragePage),
  ],
})
export class NativeStoragePageModule {}
