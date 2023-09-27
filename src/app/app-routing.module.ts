import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule) }, 
  { path: 'contato', loadChildren: () => import('./views/contato/contato.module').then(m => m.ContatoModule) }, 
  { path: 'trabalhe-conosco', loadChildren: () => import('./views/trabalhe-conosco/trabalhe-conosco.module').then(m => m.TrabalheConoscoModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
