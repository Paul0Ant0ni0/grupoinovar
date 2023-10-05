import { Component } from '@angular/core';
import { cardServicos, items } from 'src/app/shared/util';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public section!: any[];
  public servicos!: any[];

  constructor(){
   this.servicos = cardServicos;
   this.section = items;
  }


}
