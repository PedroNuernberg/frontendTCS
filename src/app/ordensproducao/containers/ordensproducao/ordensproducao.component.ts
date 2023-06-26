import { Component, OnInit, ViewChild } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ConfirmationDialogComponent } from 'src/app/shared/components/confirmation-dialog/confirmation-dialog.component';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Ordemproducao } from '../../models/ordemproducao';
import { OrdensproducaoService } from '../../services/ordensproducao.service';
import { TerceirosService } from 'src/app/terceiros/services/terceiros.service';

@Component({
  selector: 'app-ordensproducao',
  templateUrl: './ordensproducao.component.html',
  styleUrls: ['./ordensproducao.component.scss']
})
export class OrdensproducaoComponent implements OnInit {
  terceiros!: any[];

  filter = this.formBuilder.group({
    status: [''],
    lote: [''], 
    dataInicialInicio: [''],
    dataFinalInicio: [''],
    dataInicialFinal: [''],
    dataFinalFinal: [''],
    opPorTerceiro: [0],
    opPorIdOp: [''], 
  });

  ordensproducao!: Ordemproducao[];
  dataSource: any;
  readonly displayedColumns = ['category', 'loteOp', 'dataInicialOp', 'dataFinalOp', 'terceiro', 'qtdePecasOp', 'obsOp', 'actions'];
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  

  ordensproducao$: Observable <Ordemproducao[]> | null = null;

  //ordemProducaoService: OrdensproducaoService;

  constructor(
    private ordemProducaoService: OrdensproducaoService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private formBuilder: NonNullableFormBuilder,
    private terceiroService: TerceirosService) {

      this.refresh();
  }

  refresh() {
    this.ordemProducaoService.list().subscribe(res => {
      this.ordensproducao = res;
      this.dataSource = new MatTableDataSource<Ordemproducao>(this.ordensproducao);
      this.dataSource.paginator = this.paginator;
    });
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent,{
      data: errorMsg
    });
  }

  ngOnInit(): void {
    this.terceiroService.GetTerceiros()
      .subscribe(dados => this.terceiros = dados);
  }

  onFilter() {
    const formValue = Object.assign({}, this.filter.value);

    if(formValue.dataInicialInicio || formValue.dataFinalInicio) {
      var dataInicial = formValue.dataInicialInicio;
      var dataFinal = formValue.dataFinalInicio;

      if(dataInicial && dataFinal) {
        formValue.dataInicialInicio = dataInicial + "T" + "00:00:00";
        formValue.dataFinalInicio = dataFinal + "T" + "23:59:59";
      }

      if(dataInicial && !dataFinal) {
        formValue.dataInicialInicio = dataInicial + "T" + "00:00:00";
        formValue.dataFinalInicio = dataInicial + "T" + "23:59:59";
      }

      if(!dataInicial && dataFinal) {
        formValue.dataInicialInicio = dataFinal + "T" + "00:00:00";
        formValue.dataFinalInicio = dataFinal + "T" + "23:59:59";
      }
    }

    if(!formValue.dataInicialInicio || !formValue.dataFinalInicio) {
      formValue.dataInicialInicio = "1900-01-01" + "T" + "00:00:00";
        formValue.dataFinalInicio = "2100-12-31" + "T" + "23:59:59";
    }



    if(formValue.dataInicialFinal || formValue.dataFinalFinal) {
      var dataInicial = formValue.dataInicialFinal;
      var dataFinal = formValue.dataFinalFinal;

      if(dataInicial && dataFinal) {
        formValue.dataInicialFinal = dataInicial + "T" + "00:00:00";
        formValue.dataFinalFinal = dataFinal + "T" + "23:59:59";
      }

      if(dataInicial && !dataFinal) {
        formValue.dataInicialFinal = dataInicial + "T" + "00:00:00";
        formValue.dataFinalFinal = dataInicial + "T" + "23:59:59";
      }

      if(!dataInicial && dataFinal) {
        formValue.dataInicialFinal = dataFinal + "T" + "00:00:00";
        formValue.dataFinalFinal = dataFinal + "T" + "23:59:59";
      }
    }

    if(!formValue.dataInicialFinal || !formValue.dataFinalFinal) {
      formValue.dataInicialFinal = "1900-01-01" + "T" + "00:00:00";
        formValue.dataFinalFinal = "2100-12-31" + "T" + "23:59:59";
    }

    this.ordemProducaoService.filter(formValue).subscribe(res => {
      this.ordensproducao = res;
      this.dataSource = new MatTableDataSource<Ordemproducao>(this.ordensproducao);
      this.dataSource.paginator = this.paginator;
    });
  }

  onAdd() {
    this.router.navigate(['novo'], {relativeTo: this.route});
  }

  onEdit(ordemproducao: Ordemproducao) {
    this.router.navigate(['editar', ordemproducao.id], {relativeTo: this.route});
  }

  onInactive(ordemproducao: Ordemproducao) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja inativar essa ordem de produção?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.ordemProducaoService.inactivate(ordemproducao).subscribe(
          () => {
            this.refresh();
            this.snackBar.open('Ordem de produção inativada com sucesso!', 'X', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
           });
          },
          () => this.onError('Erro ao tentar inativar Ordem de produção.')
        );
      }
    });
  }
}
