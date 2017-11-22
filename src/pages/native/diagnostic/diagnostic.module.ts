import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiagnosticPage } from './diagnostic';

@NgModule({
  declarations: [
    DiagnosticPage,
  ],
  imports: [
    IonicPageModule.forChild(DiagnosticPage),
  ],
})
export class DiagnosticPageModule {}
