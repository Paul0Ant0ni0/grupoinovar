import { Component } from '@angular/core';

@Component({
  selector: 'app-quem-somos',
  templateUrl: './quem-somos.component.html',
  styleUrls: ['./quem-somos.component.css']
})
export class QuemSomosComponent {
  public  itens: string[] = [
    'Ronda ',
    'Vigilância ',
    'Supervisão ',
    'Limpeza ',
    'Manutenção ',
    'Zeladoria ',
    'Jardinagem'
  ];
}
