import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrabalheConoscoComponent } from './trabalhe-conosco/trabalhe-conosco.component';

const routes: Routes = [{ path: '', component: TrabalheConoscoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrabalheConoscoRoutingModule { }
