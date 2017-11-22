import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { VideoPlayer } from '@ionic-native/video-player';
/**
 * Generated class for the VideoPlayerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-player',
  templateUrl: 'video-player.html',
})
export class VideoPlayerPage {

  constructor(private videoPlayer: VideoPlayer) { }
  play(){
  this.videoPlayer.play('file:///android_asset/www/movie.mp4').then(() => {
    console.log('video completed');
   }).catch(err => {
    console.log(err);
   });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoPlayerPage');
  }

}
