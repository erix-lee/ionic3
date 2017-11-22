import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { BackgroundFetch, BackgroundFetchConfig } from '@ionic-native/background-fetch';
/**
 * Generated class for the BackgroundFetchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-background-fetch',
  templateUrl: 'background-fetch.html',
})
export class BackgroundFetchPage {

  constructor(private backgroundFetch: BackgroundFetch) {
    
      const config: BackgroundFetchConfig = {
        stopOnTerminate: false, // Set true to cease background-fetch from operating after user "closes" the app. Defaults to true.
      };
    
      backgroundFetch.configure(config)
         .then(() => {
             console.log('Background Fetch initialized');
    
             this.backgroundFetch.finish();
    
         })
         .catch(e => console.log('Error initializing background fetch', e));
    
      // Start the background-fetch API. Your callbackFn provided to #configure will be executed each time a background-fetch event occurs. NOTE the #configure method automatically calls #start. You do not have to call this method after you #configure the plugin
      backgroundFetch.start();
    
      // Stop the background-fetch API from firing fetch events. Your callbackFn provided to #configure will no longer be executed.
      backgroundFetch.stop();
    
    
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BackgroundFetchPage');
  }

}
