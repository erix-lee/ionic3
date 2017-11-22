import { Component } from '@angular/core';
import { IonicPage,Platform} from 'ionic-angular';

/**
 * Generated class for the ToolbarButtonsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toolbar-buttons',
  templateUrl: 'toolbar-buttons.html',
})
export class ToolbarButtonsPage {
  isAndroid: boolean = false;
  
    constructor(platform: Platform) {
      this.isAndroid = platform.is('android');
    }

}
