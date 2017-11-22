import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileChooserPage } from './file-chooser';

@NgModule({
  declarations: [
    FileChooserPage,
  ],
  imports: [
    IonicPageModule.forChild(FileChooserPage),
  ],
})
export class FileChooserPageModule {}
