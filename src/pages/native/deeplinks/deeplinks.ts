import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Deeplinks } from '@ionic-native/deeplinks';
/**
 * Generated class for the DeeplinksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-deeplinks',
  templateUrl: 'deeplinks.html',
})
export class DeeplinksPage {

  constructor(private deeplinks: Deeplinks) { }
  route(){
    this.deeplinks.route({

    }).subscribe((match) => {
      // match.$route - the route we matched, which is the matched entry from the arguments to route()
      // match.$args - the args passed in the link
      // match.$link - the full link data
      console.log('Successfully matched route', match);
    }, (nomatch) => {
      // nomatch.$link - the full link data
      console.error('Got a deeplink that didn\'t match', nomatch);
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DeeplinksPage');
  }

}
