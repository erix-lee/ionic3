import { Component } from '@angular/core';
import { IonicPage} from 'ionic-angular';
import { Zeroconf } from '@ionic-native/zeroconf';
/**
 * Generated class for the ZeroconfPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zeroconf',
  templateUrl: 'zeroconf.html',
})
export class ZeroconfPage {

  constructor(private zeroconf: Zeroconf) { }
  // watch for services of a specified type
  watch() {
    this.zeroconf.watch('_http._tcp.', 'local.').subscribe(result => {
      if (result.action == 'added') {
        console.log('service added', result.service);
      } else {
        console.log('service removed', result.service);
      }
    });
  }
  register() {
    // publish a zeroconf service of your own
    this.zeroconf.register('_http._tcp.', 'local.', 'Becvert\'s iPad', 80, {
      'foo': 'bar'
    }).then(result => {
      console.log('Service registered', result.service);
    });
  }
  unregister() {
    // unregister your service
    this.zeroconf.unregister('_http._tcp.', 'local.', 'Becvert\'s iPad');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ZeroconfPage');
  }

}
