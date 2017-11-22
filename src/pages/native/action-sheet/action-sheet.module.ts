import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActionSheetPage } from './action-sheet';
import { ActionSheet} from '@ionic-native/action-sheet';
@NgModule({
  declarations: [
    ActionSheetPage,
  ],
  imports: [
    IonicPageModule.forChild(ActionSheetPage),
  ],
  providers:[
    ActionSheet
  ]

})
export class ActionSheetPageModule {}
