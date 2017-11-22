import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileOpenerPage } from './file-opener';

@NgModule({
  declarations: [
    FileOpenerPage,
  ],
  imports: [
    IonicPageModule.forChild(FileOpenerPage),
  ],
})
export class FileOpenerPageModule {}
