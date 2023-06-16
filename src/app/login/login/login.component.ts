import { LoginService } from './../services/login.service';
import { Component } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent {

  form = this.formBuilder.group({
    email: [''],
    senha: ['']
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private service: LoginService,
    private snackBar: MatSnackBar) {
  }

  // ngOnInit(): void {

  //   this.LoginService.GetLogin()
  //     .subscribe(dados => this.login = dados);

  //   const login: Login = this.route.snapshot.data['login'];
  //   this.form.setValue({
  //     email: login.email,
  //     senha: login.senha,
  //   })
  // }

  // onSubmit() {
  //   this.service.save(this.form.value)
  //   .subscribe(result => this.onSuccess(), error => this.onError());
  // }

  // private onSuccess() {
  //   this.snackBar.open('Login realizado!', '', {duration: 3000 });
  // }

  // private onError() {
  //   this.snackBar.open('Ops, tente novamente!', '', {duration: 3000 });
  // }
}



