import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyCatsPage } from './my-cats';

@NgModule({
  declarations: [
    MyCatsPage,
  ],
  imports: [
    IonicPageModule.forChild(MyCatsPage),
  ],
})
export class MyCatsPageModule {}
