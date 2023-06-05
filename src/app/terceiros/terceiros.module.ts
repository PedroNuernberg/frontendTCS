import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TerceirosRoutingModule } from './terceiros-routing.module';
import { TerceirosComponent } from './terceiros/terceiros.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    TerceirosComponent
  ],
  imports: [
    CommonModule,
    TerceirosRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class TerceirosModule { }
