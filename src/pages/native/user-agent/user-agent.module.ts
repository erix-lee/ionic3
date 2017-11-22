import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserAgentPage } from './user-agent';

@NgModule({
  declarations: [
    UserAgentPage,
  ],
  imports: [
    IonicPageModule.forChild(UserAgentPage),
  ],
})
export class UserAgentPageModule {}
