import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IsDebugPage } from './is-debug';

@NgModule({
  declarations: [
    IsDebugPage,
  ],
  imports: [
    IonicPageModule.forChild(IsDebugPage),
  ],
})
export class IsDebugPageModule {}
