import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListsMultilinePage } from './lists-multiline';

@NgModule({
  declarations: [
    ListsMultilinePage,
  ],
  imports: [
    IonicPageModule.forChild(ListsMultilinePage),
  ],
})
export class ListsMultilinePageModule {}
