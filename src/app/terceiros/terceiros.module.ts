import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { TerceirosRoutingModule } from './terceiros-routing.module';
import { TerceirosComponent } from './terceiros/terceiros.component';
import { SharedModule } from '../shared/shared.module';
import { TerceiroFormComponent } from './terceiro-form/terceiro-form.component';


@NgModule({
  declarations: [
    TerceirosComponent,
    TerceiroFormComponent
  ],
  imports: [
    CommonModule,
    TerceirosRoutingModule,
    SharedModule,
    AppMaterialModule
  ]
})
export class TerceirosModule { }
