import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilePage } from './file';
import { File } from '@ionic-native/file';
@NgModule({
  declarations: [
    FilePage,
  ],
  imports: [
    IonicPageModule.forChild(FilePage),
  ],
  providers:[
    File
  ]
})
export class FilePageModule {}
