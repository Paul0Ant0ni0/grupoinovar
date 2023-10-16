import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrcamentosRoutingModule } from './orcamentos-routing.module';
import { OrcamentosComponent } from './orcamentos/orcamentos.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ComponentsModule } from 'src/app/components/components.module';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

@NgModule({
  declarations: [
    OrcamentosComponent
  ],
  imports: [
    CommonModule,
    OrcamentosRoutingModule,
    ComponentsModule,
    MaterialModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class OrcamentosModule { }
