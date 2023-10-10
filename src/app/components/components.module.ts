import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MaterialModule } from '../shared/material/material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { DetailsLocationComponent } from './components/details-location/details-location.component';
import { BannerContatoComponent } from './components/banner-contato/banner-contato.component';



@NgModule({
  declarations: [
    NavBarComponent,
    FooterComponent,
    DetailsLocationComponent,
    BannerContatoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
    ],
  exports: [
    NavBarComponent,
    FooterComponent,
    DetailsLocationComponent,
    BannerContatoComponent
  ]
})
export class ComponentsModule { }
