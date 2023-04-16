import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { OrdensproducaoRoutingModule } from './ordensproducao-routing.module';
import { OrdensproducaoComponent } from './ordensproducao/ordensproducao.component';


@NgModule({
  declarations: [
    OrdensproducaoComponent
  ],
  imports: [
    CommonModule,
    OrdensproducaoRoutingModule,
    MatTableModule
  ]
})
export class OrdensproducaoModule { }
