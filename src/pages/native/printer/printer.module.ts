import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrinterPage } from './printer';

@NgModule({
  declarations: [
    PrinterPage,
  ],
  imports: [
    IonicPageModule.forChild(PrinterPage),
  ],
})
export class PrinterPageModule {}
