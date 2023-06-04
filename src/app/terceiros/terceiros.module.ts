import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TerceirosRoutingModule } from './terceiros-routing.module';
import { TerceirosComponent } from './terceiros/terceiros.component';


@NgModule({
  declarations: [
    TerceirosComponent
  ],
  imports: [
    CommonModule,
    TerceirosRoutingModule
  ]
})
export class TerceirosModule { }
