import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { OrdensproducaoRoutingModule } from './ordensproducao-routing.module';
import { OrdensproducaoComponent } from './ordensproducao/ordensproducao.component';


@NgModule({
  declarations: [
    OrdensproducaoComponent
  ],
  imports: [
    CommonModule,
    OrdensproducaoRoutingModule,
    AppMaterialModule
  ]
})
export class OrdensproducaoModule { }
