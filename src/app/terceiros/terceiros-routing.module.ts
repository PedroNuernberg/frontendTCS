import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TerceirosComponent } from './terceiros/terceiros.component';

const routes: Routes = [
  { path: '', component: TerceirosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TerceirosRoutingModule { }
