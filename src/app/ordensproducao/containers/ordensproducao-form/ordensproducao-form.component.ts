import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Ordemproducao } from '../../models/ordemproducao';
import { OrdensproducaoService } from '../../services/ordensproducao.service';

@Component({
  selector: 'app-ordensproducao-form',
  templateUrl: './ordensproducao-form.component.html',
  styleUrls: ['./ordensproducao-form.component.scss']
})
export class OrdensproducaoFormComponent implements OnInit {


  form = this.formBuilder.group({
    id: [''],
    loteOp: [''],
    statusOrdemProducao: [''],
    dataInicialOp: [''],
    qtdePecasOp: ['']
  });



  constructor(private formBuilder: NonNullableFormBuilder,
    private service: OrdensproducaoService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {
    // this.form

  }

  ngOnInit(): void {
    const ordemproducao: Ordemproducao = this.route.snapshot.data['ordemproducao'];
    this.form.setValue({
      id: ordemproducao.id,
      loteOp: ordemproducao.loteOp,
      statusOrdemProducao: ordemproducao.statusOrdemProducao,
      dataInicialOp: ordemproducao.dataInicialOp,
      qtdePecasOp: ordemproducao.qtdePecasOp
    })
  }

  onSubmit() {
    this.service.save(this.form.value)
    .subscribe(result => this.onSuccess(), error => this.onError());
  }

  onCancel() {
    this.location.back();

  }

  private onSuccess() {
    this.snackBar.open('Ordem de produção incluída!', '', {duration: 3000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao incluir Ordem de Produção!', '', {duration: 3000 });

  }
}
