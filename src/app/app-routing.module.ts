import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'ordensProducao'},
  {
    path: 'ordensProducao',
    loadChildren: () => import('./ordensproducao/ordensproducao.module').then(m => m.OrdensproducaoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
