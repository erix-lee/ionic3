import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

@IonicPage()
@Component({
  selector: 'page-text-to-speech',
  templateUrl: 'text-to-speech.html',
})
export class TextToSpeechPage {

  constructor(private tts: TextToSpeech) { }
  speak() {
    this.tts.speak('Hello World')
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad TextToSpeechPage');
  }

}
