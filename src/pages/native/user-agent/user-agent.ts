import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { UserAgent } from '@ionic-native/user-agent';
/**
 * Generated class for the UserAgentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-agent',
  templateUrl: 'user-agent.html',
})
export class UserAgentPage {

  constructor(private userAgent: UserAgent) { }
  set() {

    this.userAgent.set('Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36')
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }
  get() {
    this.userAgent.get()
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));

  }
  reset() {
    this.userAgent.reset()
      .then((res: any) => console.log(res))
      .catch((error: any) => console.error(error));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAgentPage');
  }

}
