import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormGroup, NonNullableFormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

import { LoginService } from './../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private service: LoginService,
    private snackBar: MatSnackBar,
    private router: Router) {
      this.form = this.formBuilder.group({
        username: [''],
        password: ['']
      })
  }

  ngOnInit() {
  }

  onSignIn() {
    this.service.signIn(this.form.value).subscribe(
      resp => {
        localStorage.setItem('token', resp.accessToken);
        localStorage.setItem('refreshToken', resp.refreshToken);
        localStorage.setItem('user_id', resp.id.toString());
        localStorage.setItem('user_nome', resp.username.toString());
        this.router.navigate(['/ordensProducao'])

        console.log(localStorage);
      },
      erro => {
        this.onError();
      }

    )
  }
  
  private onError() {
    this.snackBar.open('Erro realizar login!', '', {duration: 3000 });

  }
}



