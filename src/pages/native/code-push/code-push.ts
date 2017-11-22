import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { CodePush } from '@ionic-native/code-push';
/**
 * Generated class for the CodePushPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-code-push',
  templateUrl: 'code-push.html',
})
export class CodePushPage {

  constructor(private codePush: CodePush) { }
  subscribe() {
    // note - mostly error & completed methods of observable will not fire
    // as syncStatus will contain the current state of the update
    this.codePush.sync().subscribe((syncStatus) => console.log(syncStatus));

    const downloadProgress = (progress) => { console.log(`Downloaded ${progress.receivedBytes} of ${progress.totalBytes}`); }
    this.codePush.sync({}, downloadProgress).subscribe((syncStatus) => console.log(syncStatus));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CodePushPage');
  }

}
