import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CaringPage } from '../caring/caring';
import { HouseTrainingPage } from '../house-training/house-training';
import { FeedingPage } from '../feeding/feeding';
import { MyCatsPage } from '../my-cats/my-cats';

/**
 * Generated class for the HealthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthPage');
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
