import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Ordemproducao } from '../../models/ordemproducao';
import { OrdensproducaoService } from '../../services/ordensproducao.service';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-ordensproducao',
  templateUrl: './ordensproducao.component.html',
  styleUrls: ['./ordensproducao.component.scss']
})
export class OrdensproducaoComponent implements OnInit {
  ordensproducao!: Ordemproducao[];
  dataSource: any;
  readonly displayedColumns = ['category', 'loteOp', 'dataInicialOp', 'dataFinalOp', 'qtdePecasOp', 'obsOp', 'actions'];
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  

  ordensproducao$: Observable <Ordemproducao[]> | null = null;

  //ordemProducaoService: OrdensproducaoService;

  constructor(private ordemProducaoService: OrdensproducaoService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute,
              private snackBar: MatSnackBar
            ) {
              this.refresh();
  }

  refresh() {
    this.ordemProducaoService.list().subscribe(res => {
      this.ordensproducao = res;
      this.dataSource = new MatTableDataSource<Ordemproducao>(this.ordensproducao);
      this.dataSource.paginator = this.paginator;
    });
    // this.ordensproducao$ = this.ordemProducaoService.list()
    // .pipe(
    //   catchError(error => {
    //     this.onError('Erro ao carregar ordens de Produção!')
    //     return of([])
    //   })
    // );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }

  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['novo'], {relativeTo: this.route});

  }

  onEdit(ordemproducao: Ordemproducao) {
    this.router.navigate(['editar', ordemproducao.id], {relativeTo: this.route});
  }

  onRemove(ordemproducao: Ordemproducao) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover essa ordem de produção?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.ordemProducaoService.remove(ordemproducao.id).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Ordem de produção removida com sucesso!', 'X', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
           });
          },
          () => this.onError('Erro ao tentar remover Ordem de produção.')
        );
      }
    });
  }
}
