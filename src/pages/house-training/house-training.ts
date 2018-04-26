import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CaringPage } from '../caring/caring';
import { FeedingPage } from '../feeding/feeding';
import { HealthPage } from '../health/health';
import { MyCatsPage } from '../my-cats/my-cats';

/**
 * Generated class for the HouseTrainingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-house-training',
  templateUrl: 'house-training.html',
})
export class HouseTrainingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HouseTrainingPage');
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
