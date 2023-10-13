import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  public ano!: number 


  constructor(){
    const data: Date = new Date();
    this.ano = data.getFullYear();
  }


}
