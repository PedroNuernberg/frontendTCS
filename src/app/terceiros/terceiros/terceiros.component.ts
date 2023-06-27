import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Terceiro } from '../models/Terceiro';
import { TerceirosService } from '../services/terceiros.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-terceiros',
  templateUrl: './terceiros.component.html',
  styleUrls: ['./terceiros.component.scss']
})
export class TerceirosComponent {
  terceiros!: Terceiro[];
  dataSource: any;
  displayedColumns = ['razaoSocial', 'cnpjTerceiro', 'enderecoTerceiro', 'bairroTerceiro', 'usuario', 'telefoneTerceiro', 'enumStatus', 'actions'];
  @ViewChild(MatPaginator) paginator !:MatPaginator;

  constructor(
    private terceirosService: TerceirosService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {
      this.refresh();
  }

  refresh() {
    this.terceirosService.GetTerceiros().subscribe(res => {
      this.terceiros = res;
      this.dataSource = new MatTableDataSource<Terceiro>(this.terceiros);
      this.dataSource.paginator = this.paginator;
    });
  }

  onAdd() {
    this.router.navigate(['novo'], {relativeTo: this.route});

  }

  onEdit(terceiro: Terceiro) {
    this.router.navigate(['editar', terceiro.idTerceiro], {relativeTo: this.route});
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }

  onInactive(terceiro: Terceiro) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
       data: 'Tem certeza que deseja inativar esse terceiro?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.terceirosService.inactivate(terceiro).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Terceiro inativado com sucesso!', 'X', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
           });
          },
          () => this.onError('Erro ao tentar inativar Terceiro.')
        );
      }
    });
  }



}
