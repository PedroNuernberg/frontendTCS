import { OrdensproducaoComponent } from './ordensproducao/ordensproducao.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: OrdensproducaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdensproducaoRoutingModule { }
