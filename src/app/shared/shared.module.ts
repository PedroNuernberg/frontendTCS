import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { DataPipe } from './pipes/data.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    DataPipe,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent,
            ConfirmationDialogComponent,
            CategoryPipe,
            DataPipe]
})
export class SharedModule { }
