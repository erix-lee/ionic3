import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileTransferPage } from './file-transfer';
import { FileTransfer,  FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
@NgModule({
  declarations: [
    FileTransferPage,
  ],
  imports: [
    IonicPageModule.forChild(FileTransferPage),
  ],
  providers:[
    FileTransfer,File,FileTransferObject
  ]
})
export class FileTransferPageModule {}
