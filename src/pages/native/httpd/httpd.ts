import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { Httpd, HttpdOptions } from '@ionic-native/httpd';
/**
 * Generated class for the HttpdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-httpd',
  templateUrl: 'httpd.html',
})
export class HttpdPage {

  constructor(private httpd: Httpd) {
    let options: HttpdOptions = {
      www_root: 'httpd_root', // relative path to app's www directory
      port: 80,
      localhost_only: false
    };

    this.httpd.startServer(options).subscribe((data) => {
      console.log('Server is live');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HttpdPage');
  }

}
