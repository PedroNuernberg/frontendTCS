import { Usuario } from './../../usuarios/models/Usuario';
import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Terceiro } from '../models/Terceiro';
import { TerceirosService } from '../services/terceiros.service';
import { UsuariosService } from 'src/app/usuarios/services/usuarios.service';

@Component({
  selector: 'app-terceiro-form',
  templateUrl: './terceiro-form.component.html',
  styleUrls: ['./terceiro-form.component.scss']
})
export class TerceiroFormComponent {
  usuarios!: any[];

  form = this.formBuilder.group({
    idTerceiro: [''],
    razaoSocialTerceiro: [''],
    cnpjTerceiro: [''],
    enderecoTerceiro: [''],
    cepTerceiro: [''],
    bairroTerceiro: [''],
    numeroTerceiro: [''],
    enumStatus: [''],
    telefoneTerceiro: [''],
    contatoTerceiro: [''],
    usuario: [{id: '', userName: '', password: '', email: '', enumStatus: ''}]
  });

  

  constructor(private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private service: TerceirosService,
    private snackBar: MatSnackBar,
    private location: Location,
    private usuarioService: UsuariosService) {
  }

  ngOnInit(): void {

    this.usuarioService.GetUsuario()
      .subscribe(dados => this.usuarios = dados);

    const terceiro: Terceiro = this.route.snapshot.data['terceiro'];
    this.form.setValue({
      idTerceiro: terceiro.idTerceiro,
      razaoSocialTerceiro: terceiro.razaoSocialTerceiro,
      cnpjTerceiro: terceiro.cnpjTerceiro,
      enderecoTerceiro: terceiro.enderecoTerceiro,
      cepTerceiro: terceiro.cepTerceiro,
      bairroTerceiro: terceiro.bairroTerceiro,
      numeroTerceiro: terceiro.numeroTerceiro,
      enumStatus: terceiro.enumStatus,
      telefoneTerceiro: terceiro.telefoneTerceiro,
      contatoTerceiro: terceiro.contatoTerceiro,
      usuario: terceiro.usuario
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
