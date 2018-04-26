import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CaringPage } from '../caring/caring';
import { HouseTrainingPage } from '../house-training/house-training';
import { FeedingPage } from '../feeding/feeding';
import { HealthPage } from '../health/health';
import { MyCatsPage } from '../my-cats/my-cats';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goHome(){
    this.navCtrl.setRoot(HomePage);
  }

  goCaring(){
    this.navCtrl.setRoot(CaringPage);
  }

  goTraining(){
    this.navCtrl.setRoot(HouseTrainingPage);
  }

  goFeeding(){
    this.navCtrl.setRoot(FeedingPage);
  }

  goHealth(){
    this.navCtrl.setRoot(HealthPage);
  }

  goCats(){
    this.navCtrl.setRoot(MyCatsPage);
  }

}
