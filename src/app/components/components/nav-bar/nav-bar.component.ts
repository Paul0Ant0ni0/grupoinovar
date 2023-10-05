import { Component } from '@angular/core';
import { DetailsLocationComponent } from '../details-location/details-location.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  constructor(
    private dialog: MatDialog,
  ){

  }

  public location(): void{
    this.dialog.open(DetailsLocationComponent, {// Caixa de dialogo, necessessáio passar o componente é o dados de configurações
      width: '100%',
      height: 'auto'

    })
  }
}
