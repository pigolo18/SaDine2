import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FeedingPage } from './feeding';

@NgModule({
  declarations: [
    FeedingPage,
  ],
  imports: [
    IonicPageModule.forChild(FeedingPage),
  ],
})
export class FeedingPageModule {}
