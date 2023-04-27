import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrdensproducaoFormComponent } from './ordensproducao-form/ordensproducao-form.component';
import { OrdensproducaoComponent } from './ordensproducao/ordensproducao.component';

const routes: Routes = [
  { path: '', component: OrdensproducaoComponent },
  { path: 'novo', component: OrdensproducaoFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdensproducaoRoutingModule { }
