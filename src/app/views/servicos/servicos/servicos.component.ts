import { Component } from '@angular/core';
import { linkSite } from 'src/app/shared/util';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  public url_Agradecimento: string = linkSite;
}
