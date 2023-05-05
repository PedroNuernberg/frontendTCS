import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { OrdensproducaoRoutingModule } from './ordensproducao-routing.module';
import { OrdensproducaoComponent } from './containers/ordensproducao/ordensproducao.component';
import { OrdensproducaoFormComponent } from './containers/ordensproducao-form/ordensproducao-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdensproducaoListComponent } from './components/ordensproducao-list/ordensproducao-list.component';


@NgModule({
  declarations: [
    OrdensproducaoComponent,
    OrdensproducaoFormComponent,
    OrdensproducaoListComponent
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
