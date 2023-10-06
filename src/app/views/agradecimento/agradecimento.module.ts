import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgradecimentoRoutingModule } from './agradecimento-routing.module';
import { AgradecimentoComponent } from './agradecimento/agradecimento.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    AgradecimentoComponent
  ],
  imports: [
    CommonModule,
    AgradecimentoRoutingModule,
    MaterialModule,
    ComponentsModule
  ]
})
export class AgradecimentoModule { }
