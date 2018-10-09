import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FileCreationPage } from '../file-creation/file-creation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToPptx = () => {
    this.navCtrl.setRoot(FileCreationPage);
  }

}
