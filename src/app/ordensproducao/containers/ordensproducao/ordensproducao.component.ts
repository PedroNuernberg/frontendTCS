import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';

import { Ordemproducao } from '../../models/ordemproducao';
import { OrdensproducaoService } from '../../services/ordensproducao.service';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ordensproducao',
  templateUrl: './ordensproducao.component.html',
  styleUrls: ['./ordensproducao.component.scss']
})
export class OrdensproducaoComponent implements OnInit {

  ordensproducao$: Observable <Ordemproducao[]>;


  //ordemProducaoService: OrdensproducaoService;

  constructor(private ordemProducaoService: OrdensproducaoService,
              public dialog: MatDialog,
              private router: Router,
              private route: ActivatedRoute
              ) {
    this.ordensproducao$ = this.ordemProducaoService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar ordens de Produção!')
        return of([])
      })
    );
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

}
