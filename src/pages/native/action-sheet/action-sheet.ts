import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ActionSheet, ActionSheetOptions } from '@ionic-native/action-sheet';


@IonicPage()
@Component({
  selector: 'page-action-sheet',
  templateUrl: 'action-sheet.html',
})
export class ActionSheetPage {

  constructor(private actionSheet: ActionSheet) { }
  show() {
    let buttonLabels = ['Share via Facebook', 'Share via Twitter'];

    const options: ActionSheetOptions = {
      title: 'What do you want with this image?',
      subtitle: 'Choose an action',
      buttonLabels: buttonLabels,
      addCancelButtonWithLabel: 'Cancel',
      addDestructiveButtonWithLabel: 'Delete',
      androidTheme: this.actionSheet.ANDROID_THEMES.THEME_HOLO_DARK,
      destructiveButtonLast: true
    };

    this.actionSheet.show(options).then((buttonIndex: number) => {
      console.log('Button pressed: ' + buttonIndex);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActionSheetPage');
  }

}
