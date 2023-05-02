import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OrdensproducaoService } from './../services/ordensproducao.service';

@Component({
  selector: 'app-ordensproducao-form',
  templateUrl: './ordensproducao-form.component.html',
  styleUrls: ['./ordensproducao-form.component.scss']
})
export class OrdensproducaoFormComponent implements OnInit {


  form: FormGroup;



  constructor(private formBuilder: FormBuilder,
    private service: OrdensproducaoService,
    private snackBar: MatSnackBar,
    private location: Location) {
    this.form = this.formBuilder.group({
      loteOp: [null],
      statusOrdemProducao: [null],
      dataInicialOp: [null],
      qtdePecasOp: [null]
    });

  }

  ngOnInit(): void {

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
