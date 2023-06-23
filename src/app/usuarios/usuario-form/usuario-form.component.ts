import { Component } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

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
    userName: [''],
    password: [''],
    email: ['', [Validators.email, Validators.required]],
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
      userName: usuario.username,
      password: usuario.password,
      email: usuario.email,
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
    this.snackBar.open('Usuário incluído!', '', {duration: 3000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Erro ao incluir Usuário!', '', {duration: 3000 });

  }
}
