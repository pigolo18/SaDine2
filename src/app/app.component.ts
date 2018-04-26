import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { CaringPage } from '../pages/caring/caring';
import { HouseTrainingPage } from '../pages/house-training/house-training';
import { FeedingPage } from '../pages/feeding/feeding';
import { HealthPage } from '../pages/health/health';
import { MyCatsPage } from '../pages/my-cats/my-cats';
import { SpecialPage } from '../pages/special/special';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, avatar: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      
      { title: 'Taking Care of Cats', component: CaringPage, avatar: "assets/imgs/avatar1.jpg" },
      { title: 'House Training', component: HouseTrainingPage, avatar: "assets/imgs/avatar2.jpg" },
      { title: 'Feeding', component: FeedingPage, avatar: "assets/imgs/avatar3.jpg" },
      { title: 'Keeping it Healthy', component: HealthPage, avatar: "assets/imgs/avatar4.jpg" },
      { title: 'My Cats', component: MyCatsPage, avatar: "assets/imgs/avatar5.jpg" },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  special(){
    this.nav.push(SpecialPage);
  }
}
