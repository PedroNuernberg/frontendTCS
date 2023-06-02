import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
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
    loteOp: ['', [Validators.required,
                  Validators.maxLength(20)]],
    statusOrdemProducao: ['', [Validators.required]],
    dataInicialOp: [''],
    qtdePecasOp: [0]
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

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if(field?.hasError('required')) {
      return 'Campo obrigatório'
    }

    // if(field?.hasError('minlength')) {
    //   const requiredLength: number = field.errors ? field.errors['minlength']['requiredLength'] : 5;
    //   return `Tamanho mínimo precisa ser de ${requiredLength} caracteres.`;
    // }

    if(field?.hasError('maxlength')) {
      const requiredLength: number = field.errors ? field.errors['maxlength']['requiredLength'] : 20;
      return `Tamanho máximo de ${requiredLength} caracteres excedido.`;
    }

    return 'Campo Inválido';
  }
}
