import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrcamentosRoutingModule } from './orcamentos-routing.module';
import { OrcamentosComponent } from './orcamentos/orcamentos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    OrcamentosComponent
  ],
  imports: [
    CommonModule,
    OrcamentosRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class OrcamentosModule { }
