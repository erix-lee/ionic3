import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';
/**
 * Generated class for the HttpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-http',
  templateUrl: 'http.html',
})
export class HttpPage {

  constructor(private http: HTTP) { }
  get(){
    this.http.get('http://ionic.io', {}, {})
    .then(data => {
  
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HttpPage');
  }

}
