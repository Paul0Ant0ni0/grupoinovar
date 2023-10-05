import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsLocationComponent } from './components/details-location/details-location.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    DetailsLocationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
    ],
  exports: [
    NavBarComponent,
    FooterComponent,
    DetailsLocationComponent
  ]
})
export class ComponentsModule { }
