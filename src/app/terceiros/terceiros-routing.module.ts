import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TerceiroResolver } from './guards/terceiro.resolver';
import { TerceiroFormComponent } from './terceiro-form/terceiro-form.component';
import { TerceirosComponent } from './terceiros/terceiros.component';

const routes: Routes = [
  { path: '', component: TerceirosComponent },
  { path: 'novo', component: TerceiroFormComponent, resolve: { terceiro: TerceiroResolver} },
  { path: 'editar/:id', component: TerceiroFormComponent, resolve: { terceiro: TerceiroResolver} }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerceirosRoutingModule { }
