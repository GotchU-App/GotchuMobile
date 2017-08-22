import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the HomePage tabs.
 *
 * See https://angular.io/docs/ts/latest/guide/dependency-injection.html for
 * more info on providers and Angular DI.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mainRoot = 'MainPage'
  profileRoot = 'ProfilePage'
  introRoot = 'IntroPage'
  testRoot = 'TestPage'


  constructor(public navCtrl: NavController) {}

}
