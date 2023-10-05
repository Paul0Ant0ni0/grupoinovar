import { Component } from '@angular/core';
import { cardCultura, items } from 'src/app/shared/util';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css']
})
export class TrabalheConoscoComponent {

  public cardCultura!: any[]


  constructor() { }

  ngOnInit(): void {
    this.cardCultura = cardCultura;

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
