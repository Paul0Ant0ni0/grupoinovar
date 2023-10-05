import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailsLocationComponent } from '../details-location/details-location.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  public ano!: number 


  constructor(
    private dialog: MatDialog,
  ){
    const data: Date = new Date();
    this.ano = data.getFullYear();
  }


  public location(): void{
    this.dialog.open(DetailsLocationComponent, {// Caixa de dialogo, necessessáio passar o componente é o dados de configurações
      width: '100%',
      height: 'auto'

    })
  }
}
