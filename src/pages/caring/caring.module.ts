import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaringPage } from './caring';

@NgModule({
  declarations: [
    CaringPage,
  ],
  imports: [
    IonicPageModule.forChild(CaringPage),
  ],
})
export class CaringPageModule {}
