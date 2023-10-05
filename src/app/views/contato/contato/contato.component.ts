import { Component } from '@angular/core';
import { cardBeneficios, faqPerguntas } from 'src/app/shared/util';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent {
  public beneficios!: any[];
  public panelOpenState: boolean = false;
  public faqs!: any[];
  public opcoesServicos: string[] = [
    'Portaria 24 horas',
    'Controlador de acesso',
    'Auxiliar de zeladoria',
    'Recepcionista',
    'Limpeza Predial',
    'Auxiliar de Limpeza',
    'Auxiliar de Serviços Gerais',
    'Auxiliar de manutenção',
    'Jardinagem',
    'Manobrista'
];


  constructor(){
    this.beneficios = cardBeneficios;
    this.faqs = faqPerguntas;
  }




  public isFormValid(formulario: HTMLFormElement): boolean {
    const formData = new FormData(formulario);
    let isValid = true;
    // Iterar sobre os campos do formulário
    formData.forEach((value, key) => {
        // Se o valor do campo estiver vazio, nulo ou indefinido, o formulário não é válido
        
        if (!value || value.toString().trim() === '') {
            isValid = false;
            return;
        }
    });

    // Retorna true se todos os campos estiverem preenchidos, caso contrário, retorna false
    return isValid;
}
}
