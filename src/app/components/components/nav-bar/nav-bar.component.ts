import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public   menuVisivel: boolean = false;

  constructor(
 
  ){

  }


  public toggleMenu(): void {
    this.menuVisivel = !this.menuVisivel;
  }


}
