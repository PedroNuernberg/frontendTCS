import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { TerceirosService } from 'src/app/terceiros/services/terceiros.service';

import { Ordemproducao } from '../../models/ordemproducao';
import { OrdensproducaoService } from '../../services/ordensproducao.service';

@Component({
  selector: 'app-ordensproducao-form',
  templateUrl: './ordensproducao-form.component.html',
  styleUrls: ['./ordensproducao-form.component.scss']
})
export class OrdensproducaoFormComponent implements OnInit {
  terceiros!: any[];

  form = this.formBuilder.group({
    id: [''],
    loteOp: ['', [Validators.required,
                  Validators.maxLength(20)]],
    statusOrdemProducao: ['', [Validators.required]],
    dataInicialOp: ['', [Validators.required]],
    horaInicialOp: [''],
    dataFinalOp: [''],
    qtdePecasOp: [0, [Validators.required]],
    obsOp: [''],
    enumStatus: [''],
    terceiro: [{id: '', razaoSocial: '', cnpjTerceiro: '', enderecoTerceiro: '', cepTerceiro: '', bairroTerceiro: '', numeroTerceiro: '', enumStatus: '', telefoneTerceiro: '', contatoTerceiro: '', usuario: {idUsuario: '', nomeUsuario: '', senhaUsuario: '', tipoUsuario: 0, emailUsuario: '', enumStatus: ''}}]
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: OrdensproducaoService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private terceiroService: TerceirosService) {
    // this.form

  }

  ngOnInit() {
    this.terceiroService.GetTerceiros()
      .subscribe(dados => this.terceiros = dados);

    const ordemproducao: Ordemproducao = this.route.snapshot.data['ordemproducao'];
    let newDate = this.form.value.dataInicialOp

    this.form.value.dataFinalOp = newDate?.slice(0,9) + "T" + this.form.value.horaInicialOp;


    this.form.setValue({
      id: ordemproducao.id,
      loteOp: ordemproducao.loteOp,
      statusOrdemProducao: ordemproducao.statusOrdemProducao,
      dataInicialOp: ordemproducao.dataInicialOp,
      dataFinalOp: ordemproducao.dataFinalOp,
      qtdePecasOp: ordemproducao.qtdePecasOp,
      terceiro: ordemproducao.terceiro,
      obsOp: ordemproducao.obsOp,
      enumStatus: ordemproducao.enumStatus,
      horaInicialOp: ''
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
