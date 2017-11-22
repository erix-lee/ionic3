import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilePathPage } from './file-path';

@NgModule({
  declarations: [
    FilePathPage,
  ],
  imports: [
    IonicPageModule.forChild(FilePathPage),
  ],
})
export class FilePathPageModule {}
