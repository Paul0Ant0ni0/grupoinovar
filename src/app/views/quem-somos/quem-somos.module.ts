import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuemSomosRoutingModule } from './quem-somos-routing.module';
import { QuemSomosComponent } from './quem-somos/quem-somos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  declarations: [
    QuemSomosComponent
  ],
  imports: [
    CommonModule,
    QuemSomosRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class QuemSomosModule { }
