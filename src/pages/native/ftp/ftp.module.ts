import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FtpPage } from './ftp';

@NgModule({
  declarations: [
    FtpPage,
  ],
  imports: [
    IonicPageModule.forChild(FtpPage),
  ],
})
export class FtpPageModule {}
