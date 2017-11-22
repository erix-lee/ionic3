import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileEncryptionPage } from './file-encryption';

@NgModule({
  declarations: [
    FileEncryptionPage,
  ],
  imports: [
    IonicPageModule.forChild(FileEncryptionPage),
  ],
})
export class FileEncryptionPageModule {}
