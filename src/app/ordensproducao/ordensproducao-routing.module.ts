import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdensproducaoFormComponent } from './containers/ordensproducao-form/ordensproducao-form.component';
import { OrdensproducaoComponent } from './containers/ordensproducao/ordensproducao.component';
import { OrdemproducaoResolver } from './guards/ordemproducao.resolver';

const routes: Routes = [
  { path: '', component: OrdensproducaoComponent },
  { path: 'novo', component: OrdensproducaoFormComponent, resolve: { ordemproducao: OrdemproducaoResolver} },
  { path: 'editar/:id', component: OrdensproducaoFormComponent, resolve: { ordemproducao: OrdemproducaoResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdensproducaoRoutingModule { }
