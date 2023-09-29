import { Component } from '@angular/core';

@Component({
  selector: 'app-trabalhe-conosco',
  templateUrl: './trabalhe-conosco.component.html',
  styleUrls: ['./trabalhe-conosco.component.css']
})
export class TrabalheConoscoComponent {




  constructor() { }

  ngOnInit(): void {


  }

  public isFormValid(formulario: HTMLFormElement): boolean {
   
  
    console.log(formulario);
    return true
  }
  
  






}
