import { Component } from '@angular/core';
import { IonicPage ,Platform} from 'ionic-angular';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import { CouchbaseLite } from '@ionic-native/couchbase-lite';
/**
 * Generated class for the CouchbaseLitePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-couchbase-lite',
  templateUrl: 'couchbase-lite.html',
})
export class CouchbaseLitePage {

  constructor(private couchbase: CouchbaseLite, private platform: Platform, private http: Http) {
    this.initMethod();
  }
  url: string;
  initMethod() {
    this.couchbase.getURL().then((url) => {
      this.url = url;
    })
  }
  getUrl() {
    return this.url;
  }
  // DATABASES //
  createDatabase(database_name: string) {
  
  }
  deleteDatabase(database_name: string) {

  }

  getAllDbs() {

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CouchbaseLitePage');
  }

}
