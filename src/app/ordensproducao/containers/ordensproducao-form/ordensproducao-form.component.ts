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
    horaInicialOp: ['', [Validators.required]],
    dataFinalOp: [''],
    horaFinalOp: [''],
    qtdePecasOp: [0, [Validators.required]],
    obsOp: [''],
    enumStatus: [''],
    usuario: {id: '', username: '', password: '', email: '', enumStatus: ''},
    terceiro: {idTerceiro: '', razaoSocialTerceiro: '', cnpjTerceiro: '', enderecoTerceiro: '', cepTerceiro: '', bairroTerceiro: '', numeroTerceiro: '', enumStatus: '', telefoneTerceiro: '', contatoTerceiro: '', usuario: {id: '', username: '', password: '', email: '', enumStatus: ''}}
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: OrdensproducaoService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private terceiroService: TerceirosService) {
  }

  ngOnInit() {
    this.terceiroService.GetTerceiros()
      .subscribe(dados => this.terceiros = dados);

    const ordemproducao: Ordemproducao = this.route.snapshot.data['ordemproducao'];
    let dataInicial, horaInicial = '';
    let dataFinal = '', horaFinal = '';

    if (ordemproducao.dataInicialOp !== null) {
      [dataInicial, horaInicial] = ordemproducao.dataInicialOp.split("T");
      horaInicial = horaInicial.slice(0, 5);
    }

    if (ordemproducao.dataFinalOp !== null) {
      [dataFinal, horaFinal] = ordemproducao.dataFinalOp.split("T");
      horaFinal = horaFinal.slice(0, 5);
    }

    this.form.setValue({
      id: ordemproducao.id,
      loteOp: ordemproducao.loteOp,
      statusOrdemProducao: ordemproducao.statusOrdemProducao,
      dataInicialOp: dataInicial as any,
      dataFinalOp: dataFinal as any,
      qtdePecasOp: ordemproducao.qtdePecasOp,
      terceiro: ordemproducao.terceiro,
      obsOp: ordemproducao.obsOp,
      enumStatus: ordemproducao.enumStatus,
      horaInicialOp: horaInicial,
      horaFinalOp: horaFinal,
      usuario: ordemproducao.terceiro.usuario
    })
  }

  onSubmit() {
    
    const formValue = Object.assign({}, this.form.value);

    formValue.usuario = formValue.terceiro?.usuario;

    formValue.dataInicialOp = formValue.dataInicialOp + "T" + formValue.horaInicialOp + ":00.00";

    if(formValue.dataFinalOp) {

      formValue.dataFinalOp = formValue.dataFinalOp + "T" + formValue.horaFinalOp + ":00.00"
    }

    this.service.save(formValue)
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
