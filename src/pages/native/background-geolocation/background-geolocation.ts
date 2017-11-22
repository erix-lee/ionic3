import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
/**
 * Generated class for the BackgroundGeolocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-background-geolocation',
  templateUrl: 'background-geolocation.html',
})
export class BackgroundGeolocationPage {

  constructor(private backgroundGeolocation: BackgroundGeolocation) { }
  configure() {
    const config: BackgroundGeolocationConfig = {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      debug: true, //  enable this hear sounds for background-geolocation life-cycle.
      stopOnTerminate: false, // enable this to clear background location settings when the app terminates
    };

    this.backgroundGeolocation.configure(config)
      .subscribe((location: BackgroundGeolocationResponse) => {

        console.log(location);

        // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
        // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
        // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
        this.backgroundGeolocation.finish(); // FOR IOS ONLY

      });

  }
  start() {
    this.backgroundGeolocation.start();
  }
  stop() {
    this.backgroundGeolocation.stop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BackgroundGeolocationPage');
  }

}
