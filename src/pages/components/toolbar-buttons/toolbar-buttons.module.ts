import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ToolbarButtonsPage } from './toolbar-buttons';

@NgModule({
  declarations: [
    ToolbarButtonsPage,
  ],
  imports: [
    IonicPageModule.forChild(ToolbarButtonsPage),
  ],
})
export class ToolbarButtonsPageModule {}
