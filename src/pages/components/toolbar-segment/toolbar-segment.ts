import { Component } from '@angular/core';
import { IonicPage, Platform } from 'ionic-angular';

/**
 * Generated class for the ToolbarSegmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-toolbar-segment',
  templateUrl: 'toolbar-segment.html',
})
export class ToolbarSegmentPage {

  isAndroid: boolean = false;
  selectedSegment: string = 'hot';

  constructor(platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ToolbarSegmentPage');
  }

}
