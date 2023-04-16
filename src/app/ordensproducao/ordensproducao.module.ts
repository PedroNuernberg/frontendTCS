import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdensproducaoRoutingModule } from './ordensproducao-routing.module';
import { OrdensproducaoComponent } from './ordensproducao/ordensproducao.component';


@NgModule({
  declarations: [
    OrdensproducaoComponent
  ],
  imports: [
    CommonModule,
    OrdensproducaoRoutingModule
  ]
})
export class OrdensproducaoModule { }
