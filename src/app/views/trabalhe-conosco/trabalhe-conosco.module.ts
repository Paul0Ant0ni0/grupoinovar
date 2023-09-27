import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrabalheConoscoRoutingModule } from './trabalhe-conosco-routing.module';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/shared/material/material.module';


@NgModule({
  declarations: [
    TrabalheConoscoComponent
  ],
  imports: [
    CommonModule,
    TrabalheConoscoRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class TrabalheConoscoModule { }
