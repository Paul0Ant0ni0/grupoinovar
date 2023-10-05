import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =
  [
    {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'home',
      loadChildren: () =>
        import('./views/home/home.module').then(m => m.HomeModule),
      title: 'Home'
    },
    {
      path: 'contato',
      loadChildren: () =>
        import('./views/contato/contato.module').then(m => m.ContatoModule),
      title: 'Contato/Orçamento'
    },
    {
      path: 'trabalhe-conosco',
      loadChildren: () =>
        import('./views/trabalhe-conosco/trabalhe-conosco.module').then(m => m.TrabalheConoscoModule),
      title: 'Trabalhe Conosco'
    },
    {
      path: 'servicos',
      loadChildren: () =>
        import('./views/servicos/servicos.module').then(m => m.ServicosModule),
      title: 'Serviços'
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
