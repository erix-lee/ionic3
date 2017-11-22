import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HttpdPage } from './httpd';

@NgModule({
  declarations: [
    HttpdPage,
  ],
  imports: [
    IonicPageModule.forChild(HttpdPage),
  ],
})
export class HttpdPageModule {}
