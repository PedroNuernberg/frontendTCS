import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Terceiro } from '../models/Terceiro';
import { TerceirosService } from '../services/terceiros.service';

@Component({
  selector: 'app-terceiros',
  templateUrl: './terceiros.component.html',
  styleUrls: ['./terceiros.component.scss']
})
export class TerceirosComponent {
  terceiros!: Terceiro[];
  dataSource: any;
  displayedColumns = ['razaoSocial', 'cnpjTerceiro', 'enderecoTerceiro', 'cepTerceiro', 'bairroTerceiro', 'numeroTerceiro', 'enumStatus', 'telefoneTerceiro', 'contatoTerceiro'];
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



}
