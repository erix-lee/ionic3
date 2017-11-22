import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ThreeDeeTouch, ThreeDeeTouchQuickAction, ThreeDeeTouchForceTouch } from '@ionic-native/three-dee-touch';


@IonicPage()
@Component({
  selector: 'page-three-dee-touch',
  templateUrl: 'three-dee-touch.html',
})
export class ThreeDeeTouchPage {

  constructor(private threeDeeTouch: ThreeDeeTouch) {
    this.threeDeeTouch.isAvailable().then(isAvailable => console.log('3D Touch available? ' + isAvailable));
    this.threeDeeTouch.watchForceTouches()
      .subscribe(
      (data: ThreeDeeTouchForceTouch) => {
        console.log('Force touch %' + data.force);
        console.log('Force touch timestamp: ' + data.timestamp);
        console.log('Force touch x: ' + data.x);
        console.log('Force touch y: ' + data.y);
      }
      );


    let actions: Array<ThreeDeeTouchQuickAction> = [
      {
        type: 'checkin',
        title: 'Check in',
        subtitle: 'Quickly check in',
        iconType: 'Compose'
      },
      {
        type: 'share',
        title: 'Share',
        subtitle: 'Share like you care',
        iconType: 'Share'
      },
      {
        type: 'search',
        title: 'Search',
        iconType: 'Search'
      },
      {
        title: 'Show favorites',
        iconTemplate: 'HeartTemplate'
      }
    ];

    this.threeDeeTouch.configureQuickActions(actions);

    this.threeDeeTouch.onHomeIconPressed().subscribe(
      (payload) => {
        // returns an object that is the button you presed
        console.log('Pressed the ${payload.title} button')
        console.log(payload.type)

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThreeDeeTouchPage');
  }

}
