import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { VideoEditor } from '@ionic-native/video-editor';
/**
 * Generated class for the VideoEditorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-video-editor',
  templateUrl: 'video-editor.html',
})
export class VideoEditorPage {

  constructor(private videoEditor: VideoEditor) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VideoEditorPage');
  }
  transcodeVideo() {
    this.videoEditor.transcodeVideo({
      fileUri: '/path/to/input.mov',
      outputFileName: 'output.mp4',
      outputFileType:this.videoEditor.OutputFileType.MPEG4
    })
      .then((fileUri: string) => console.log('video transcode success', fileUri))
      .catch((error: any) => console.log('video transcode error', error));
  }
}
