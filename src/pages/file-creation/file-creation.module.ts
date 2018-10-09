import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FileCreationPage } from './file-creation';

@NgModule({
  declarations: [
    FileCreationPage,
  ],
  imports: [
    IonicPageModule.forChild(FileCreationPage),
  ],
})
export class FileCreationPageModule {}
