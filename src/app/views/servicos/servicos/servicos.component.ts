import { Component} from '@angular/core';
import { cardServicos, linkSite } from 'src/app/shared/util';



@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent {
  public url_Agradecimento: string = linkSite;
  public servicos!: any[];
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

  constructor(
    
  ) {
    this.servicos = cardServicos;
  }

 



  public isFormValid(formulario: HTMLFormElement): boolean {
    const formData = new FormData(formulario);
    const file: File = formData.get('Currículo') as File;
    const validFile: boolean | string = (file) ? file.name : false;
    let isValid = true;

    // Iterar sobre os campos do formulário
    formData.forEach((value, key) => {
      // Se o valor do campo estiver vazio, nulo ou indefinido, o formulário não é válido
      if (!value || value.toString().trim() === '' || validFile === "") {
        // Verificar se o campo é o input de arquivo (currículo) e se não está vazio
        isValid = false;
        return;
      }
    });

    // Retorna true se todos os campos estiverem preenchidos, caso contrário, retorna false
    return isValid;
  }
}
