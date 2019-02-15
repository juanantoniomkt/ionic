import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { StreamingMedia, StreamingAudioOptions } from '@ionic-native/streaming-media/ngx';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],

  declarations: [Tab2Page]

})

export class Tab2PageModule 
{
  
  constructor(private streamingMedia: StreamingMedia) {}

  log():void 
  {
    console.log('Your message here');
  }

}
