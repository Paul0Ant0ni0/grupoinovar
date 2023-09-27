import { Component } from '@angular/core';
import { items } from 'src/app/shared/uil';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public section: any[] = items;

  constructor(){
   
  }
}
