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
  displayedColumns = ['razaoSocial', 'cnpjTerceiro', 'enderecoTerceiro', 'cepTerceiro', 'bairroTerceiro', 'numeroTerceiro', 'telefoneTerceiro', 'contatoTerceiro', 'enumStatus', 'actions'];
  @ViewChild(MatPaginator) paginator !:MatPaginator;

  constructor(
    private terceirosService: TerceirosService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    public dialog: MatDialog) {
    this.terceirosService.GetTerceiros().subscribe(res => {
      this.terceiros = res;
      this.dataSource = new MatTableDataSource<Terceiro>(this.terceiros);
      this.dataSource.paginator = this.paginator;
    });
  }

  refresh() {
    // this.usuarios = this.usuariosService.GetUsuario()
    // .pipe(
    //   catchError(error => {
    //     this.onError('Erro ao carregar ordens de Produção!')
    //     return of([])
    //   })
    // );
  }

  onAdd() {
    this.router.navigate(['novo'], {relativeTo: this.route});

  }

  onEdit(usuario: Terceiro) {
    this.router.navigate(['editar', usuario.id], {relativeTo: this.route});
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }

  onDelete(usuario: Terceiro) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover esse usuário?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.terceirosService.remove(usuario.id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Usuário removido com sucesso!', 'X', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
           });
          },
          () => this.onError('Erro ao tentar remover Usuário.')
        );
      }
    });
  }



}
