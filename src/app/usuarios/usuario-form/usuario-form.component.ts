import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';

import { Usuario } from '../models/Usuario';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
  styleUrls: ['./usuario-form.component.scss']
})

export class UsuarioFormComponent{


  form = this.formBuilder.group({
    id: [''],
    nomeUsuario: [''],
    senhaUsuario: [''],
    tipoUsuario: [''],
    emailUsuario: [''],
    enumStatus: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private service: UsuariosService,
    private snackBar: MatSnackBar,
    private location: Location) {

  }

  ngOnInit(): void {
    const usuario: Usuario = this.route.snapshot.data['usuario'];
    this.form.setValue({
      id: usuario.id,
      nomeUsuario: usuario.nomeUsuario,
      senhaUsuario: usuario.senhaUsuario,
      tipoUsuario: usuario.tipoUsuario,
      emailUsuario: usuario.emailUsuario,
      enumStatus: usuario.enumStatus
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
