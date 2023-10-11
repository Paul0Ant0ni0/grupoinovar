import { Component } from '@angular/core';
import { cardBeneficiosServicos, linkSite, opcoesServicos } from 'src/app/shared/util';

@Component({
  selector: 'app-orcamentos',
  templateUrl: './orcamentos.component.html',
  styleUrls: ['./orcamentos.component.css']
})
export class OrcamentosComponent {

  public url_Agradecimento: string = linkSite;
  public servicos!: any[];
  public cardBeneficios!: any[];
  public opcoesServicos!: string[];
  constructor(
    
  ) {

    this.cardBeneficios = cardBeneficiosServicos;
    this.opcoesServicos = opcoesServicos;
  
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
