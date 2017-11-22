import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CodePushPage } from './code-push';

@NgModule({
  declarations: [
    CodePushPage,
  ],
  imports: [
    IonicPageModule.forChild(CodePushPage),
  ],
})
export class CodePushPageModule {}
