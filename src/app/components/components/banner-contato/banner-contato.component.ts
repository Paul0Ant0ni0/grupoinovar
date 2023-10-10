import { Component } from '@angular/core';
import { bannerContato } from 'src/app/shared/util';

@Component({
  selector: 'app-banner-contato',
  templateUrl: './banner-contato.component.html',
  styleUrls: ['./banner-contato.component.css']
})
export class BannerContatoComponent {
  public itensBenner!: any[];

  constructor(){
    this.itensBenner = bannerContato;
  }

}
