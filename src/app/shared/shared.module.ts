import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from './app-material/app-material.module';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { CategoryPipe } from './pipes/category.pipe';
import { DataPipe } from './pipes/data.pipe';
import { NameCategoryPipe } from './pipes/nameCategory.pipe';



@NgModule({
  declarations: [
    ErrorDialogComponent,
    CategoryPipe,
    DataPipe,
    NameCategoryPipe,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [ErrorDialogComponent,
            ConfirmationDialogComponent,
            CategoryPipe,
            NameCategoryPipe,
            DataPipe]
})
export class SharedModule { }
