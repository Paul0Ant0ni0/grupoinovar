import { Component } from '@angular/core';
import { cardCultura, linkSite } from 'src/app/shared/util';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css']
})
export class TrabalheConoscoComponent {

  public cardCultura!: any[]
  public url_Agradecimento: string = linkSite;

  constructor() { }

  ngOnInit(): void {
    this.cardCultura = cardCultura;

  }

  public isFormValid(formulario: HTMLFormElement): boolean {
    const formData = new FormData(formulario);
    const file: File | null = formData.get('Currículo') as File;
    let isValid = true;

    // Iterar sobre os campos do formulário
    formData.forEach((value, key) => {
      // Se o valor do campo estiver vazio, nulo ou indefinido, o formulário não é válido
      if (!value || value.toString().trim() === '' || file.name === "") {
        // Verificar se o campo é o input de arquivo (currículo) e se não está vazio
        isValid = false;
        return;
      }
    });

    // Retorna true se todos os campos estiverem preenchidos, caso contrário, retorna false
    return isValid;
  }


  public sendWhats(formulario: HTMLFormElement): void {
    const form: FormData = new FormData(formulario);
    form.forEach(values => console.log(values))

    

    navigator.share({
      title: 'Formulário de Candidatura',
      text: `
      Nome: ${form.get('Nome')};\n
      E-mail: ${form.get('E-mail')};\n
      Telefone: ${form.get('Telefone')};\n
      Data de Nascimento: ${form.get('Data Nascimento')};\n
      Cargo: ${form.get('Cargo')};\n
      Pretensão Salarial: ${form.get('Pretensão Salarial')};\n
      Apresentação: ${form.get('Apresentacao')};\n
      Currículo: ${form.get('Currículo')} `,
      files: [form.get('Currículo') as File]
    })
      .then(() => console.log('Compartilhado com sucesso!'))
      .catch((error) => console.error('Erro ao compartilhar:', error));
  }
}














