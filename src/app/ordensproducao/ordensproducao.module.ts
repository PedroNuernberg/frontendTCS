import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { OrdensproducaoRoutingModule } from './ordensproducao-routing.module';
import { OrdensproducaoComponent } from './ordensproducao/ordensproducao.component';
import { OrdensproducaoFormComponent } from './ordensproducao-form/ordensproducao-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    OrdensproducaoComponent,
    OrdensproducaoFormComponent
  ],
  imports: [
    CommonModule,
    OrdensproducaoRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class OrdensproducaoModule { }
