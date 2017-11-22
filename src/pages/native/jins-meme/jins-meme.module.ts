import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JinsMemePage } from './jins-meme';

@NgModule({
  declarations: [
    JinsMemePage,
  ],
  imports: [
    IonicPageModule.forChild(JinsMemePage),
  ],
})
export class JinsMemePageModule {}
