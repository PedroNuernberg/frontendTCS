import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { TerceirosService } from '../services/terceiros.service';
import { Terceiro } from '../models/Terceiro';

@Component({
  selector: 'app-terceiro-form',
  templateUrl: './terceiro-form.component.html',
  styleUrls: ['./terceiro-form.component.scss']
})
export class TerceiroFormComponent {

  form = this.formBuilder.group({
    id: [''],
    razaoSocial: [''],
    cnpjTerceiro: [''],
    enderecoTerceiro: [''],
    cepTerceiro: [''],
    bairroTerceiro: [''],
    numeroTerceiro: [''],
    enumStatus: [''],
    telefoneTerceiro: [''],
    contatoTerceiro: [''],
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private service: TerceirosService,
    private snackBar: MatSnackBar,
    private location: Location) {
  }

  ngOnInit(): void {
    const terceiro: Terceiro = this.route.snapshot.data['terceiro'];
    this.form.setValue({
      id: terceiro.id,
      razaoSocial: terceiro.razaoSocial,
      cnpjTerceiro: terceiro.cepTerceiro,
      enderecoTerceiro: terceiro.enderecoTerceiro,
      cepTerceiro: terceiro.cepTerceiro,
      bairroTerceiro: terceiro.bairroTerceiro,
      numeroTerceiro: terceiro.numeroTerceiro,
      enumStatus: terceiro.enumStatus,
      telefoneTerceiro: terceiro.telefoneTerceiro,
      contatoTerceiro: terceiro.contatoTerceiro,
      


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
    this.snackBar.open('Terceiro incluído!', '', {duration: 3000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao incluir Terceiro!', '', {duration: 3000 });
  }


}
