import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolbarSearchbarPage } from './toolbar-searchbar';

@NgModule({
  declarations: [
    ToolbarSearchbarPage,
  ],
  imports: [
    IonicPageModule.forChild(ToolbarSearchbarPage),
  ],
})
export class ToolbarSearchbarPageModule {}
